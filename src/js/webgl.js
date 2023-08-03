import gsap from "gsap";
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import $ from "jquery";
import APP from "./app.js"
import cubeGLTF from "../assets/objects/CUBE.gltf";
import hidePage from "./views.js"



APP.webGL = {
  _this : this,
  mouse : new THREE.Vector2(),
  windowHalfX : window.innerWidth/2,
  windowHalfY : window.innerHeight/2,
  raycaster : new THREE.Raycaster(),
  clock : new THREE.Clock(),
  intersectCube : false,
  particleCount : 300,
  particles : [],
  

  init : function(){
      this.canvas = document.querySelector('canvas.webgl');
      this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
      this.camera.position.set(0,0,5);
      this.scene = new THREE.Scene();
      this.scene.background = null;

      //Renderer
      this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, alpha: true});
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.toneMapping = THREE.CineonToneMapping;
      this.renderer.toneMappingExposure = .33;
      const renderPass = new RenderPass(this.scene, this.camera);
      const fxaaPass = new ShaderPass( FXAAShader );
      this.composer = new EffectComposer(this.renderer);
      this.composer.setSize(window.innerWidth, window.innerHeight);
      this.composer.addPass(renderPass);

      const pixelRatio = this.renderer.getPixelRatio();

      fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( window.innerWidth * pixelRatio );
      fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( window.innerHeight * pixelRatio );

      this.bloomPass = new UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          1,
          1.1,
          .1
      )
      this.composer.addPass(fxaaPass);
      this.composer.addPass(this.bloomPass);
      

      // Lights
      const light = new THREE.DirectionalLight(0xffffff, .3);
      const light2 = new THREE.DirectionalLight(0xffffff, .6);
      const light3 = new THREE.DirectionalLight(0xffffff, .6);
      const light4 = new THREE.DirectionalLight(0xffffff, .6);

      light.position.set(-5, .38, -1.03); 
      light2.position.set(-4.38, 1.35, .7); 
      light3.position.set(2.15, 1.03, -.92); 
      light4.position.set(.81, -.16, -.48); 
      this.scene.add(light);
      this.scene.add(light2);
      this.scene.add(light3);
      this.scene.add(light4);


      //Loading Manager
      this.manager = new THREE.LoadingManager();
      this.manager.onProgress = function(item,loaded,total){
          
      };
      this.manager.onLoad = function(){
          APP.webGL.initObjects();
      };

      this.gltfLoader = new GLTFLoader(this.manager);
      this.gltfLoader.load(cubeGLTF, (gltf) => {
          gltf.scene.scale.set(1.0,1.0,1.0);
          gltf.scene.rotation.set(-.1,-2.35,0);
          gltf.scene.position.set(0,0,.3);
          gltf.scene.name = "cube";
          this.scene.add(gltf.scene);
      });

      window.onresize = this.resize;
  },
  onMouseMove : function(e){
      console.log("Mouse move webGL");
      var _this = APP.webGL;
      e.preventDefault();
      _this.mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    _this.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
      _this.raycaster.setFromCamera(_this.mouse, _this.camera);

      var intersects = _this.raycaster.intersectObjects(_this.scene.children);
      if(intersects.length > 0){
          this.intersectCube = true;
          $(".webgl").css("cursor", "pointer");
          var object = intersects[0];
          console.log("intersects");
          //Start glow animation
          gsap.to(_this.bloomPass, {
              strength: 1.8, // Increase the bloom strength to 1.5
              duration: 1, // Duration of the animation (in seconds)
              repeat: -1, // Repeat indefinitely
              yoyo: true, // Yoyo animation (back and forth)
              ease: "power1.inOut", // Easing function
            });
            gsap.killTweensOf(_this.bloomPass, "strengthReset");
      }
      else {
          this.intersectCube = false;
          $(".webgl").css("cursor", "auto");
          // If the mouse is not intersecting the object, smoothly transition back to the original strength
          gsap.to(_this.bloomPass, {
              strength: 1, // Original bloom strength
              duration: 0.5, // Duration of the animation (in seconds)
              ease: "power1.inOut", // Easing function
              overwrite: "auto",
              onComplete: function() {
                  _this.bloomPass.strength = 1; // Set the final strength value to ensure accuracy
              },
              onInterrupt: function() {
                  _this.bloomPass.strength = 1; // Set the final strength value if the animation is interrupted
              },
              // Use a unique identifier for this tween
              // to avoid conflicts with the other tween
              id: "strengthReset"
          });
      }
  },
  onClick: function (e) {
      var _this = APP.webGL;
      console.log("clicked");
      e.preventDefault();
      if (this.intersectCube) {
          var $whiteOverlay = $("<div>").addClass("white").css("opacity", 0);
          $("body").append($whiteOverlay);

          var object = _this.scene.getObjectByName("cube");
          setTimeout(function(){
              //Screen flash effect
              gsap.to($whiteOverlay, {
                  opacity: 1,
                  duration: 1, 
                  onComplete : function(){
                      $(".webgl").css("cursor", "auto");
                      APP.go("home", true);
                      gsap.to($whiteOverlay, {
                          opacity: 0,
                          duration: 2, 
                          onComplete: function(){
                              $whiteOverlay.remove();
                          }
                          
                      });
                  }
              });
          }, 1000);
          
          gsap.to(_this.bloomPass, {
              strength: 50,
              duration: 2, // Duration of the animation (in seconds)
              ease: "power1.inOut", // Easing function
              onComplete: function () {
                  _this.scene.remove(object);
                  hidePage('.webgl');
                  
              }
          });
      }
  },
  
  resize : function(){
      var _this = APP.webGL;
      var width = window.innerWidth;
      var height = window.innerHeight;
      _this.camera.aspect = width / height;
      _this.camera.updateProjectionMatrix();
      _this.renderer.setSize(width,height);
      _this.windowHalfX = width/2;
      _this.windowHalfY = height/2;
      console.log("resize");
  },
  tick : function(){
      var _this = APP.webGL;
      var scene = _this.scene;
      var camera = _this.camera;
      var renderer = _this.renderer;
      var object = _this.scene.getObjectByName("cube"); 
      var targetX, targetY;
      var composer = _this.composer;
      composer.render();

      //gltf.scene.rotation.set(-.1,-2.35,0);
      
      targetX = _this.mouse.x * 0.1;
      targetY = -_this.mouse.y * 0.1;

      // Define the allowed rotation ranges
      const minX = -0.2; // Minimum X rotation
      const maxX = 0.1;  // Maximum X rotation
      const minY = -2.35; // Minimum Y rotation
      const maxY = -2.30; // Maximum Y rotation
      const minZ = -0.4;  // Minimum Z rotation
      const maxZ = 0.4;   // Maximum Z rotation
      const targetZ = THREE.MathUtils.mapLinear(targetY, -1, 1, minZ, maxZ);

      // Calculate the new rotation values
      const newRotX = object.rotation.x + 0.5 * (targetX - object.rotation.x);
      const newRotY = object.rotation.y + 0.5 * (targetY - object.rotation.y);
      const newRotZ = object.rotation.z + 0.5 * (targetZ - object.rotation.z);

      // Clamp the rotation values to the allowed ranges
      object.rotation.x = THREE.MathUtils.clamp(newRotX, minX, maxX);
      object.rotation.y = THREE.MathUtils.clamp(newRotY, minY, maxY);
      object.rotation.z = THREE.MathUtils.clamp(newRotZ, minZ, maxZ);

      

     // renderer.render(scene,camera);

     
      window.requestAnimationFrame(_this.tick);

  },
  initObjects : function() {
      var _this = APP.webGL;
      var object = _this.scene.getObjectByName("cube"); 
      window.addEventListener('mousemove', APP.webGL.onMouseMove);
      window.addEventListener('click', APP.webGL.onClick);

      // Use GSAP to animate the object's position
      gsap.to(object.position, {
          y: "-=.08", // Distance to move up
          duration: 3, // Duration of the animation (in seconds)
          repeat: -1, // Repeat indefinitely
          yoyo: true, // Yoyo animation (back and forth)
          ease: "power1.inOut", // Easing function
      });
      

      _this.tick();
  },
  show: function(){
      console.log("show webgl");
      $(".webgl").addClass("show");
      
  },
  hide: function(){
      window.removeEventListener('click', APP.webGL.onClick);
      window.removeEventListener('mousemove', APP.webGL.onMouseMove);
      console.log("hide webgl");
      $(".webgl").removeClass("show");

  }

}