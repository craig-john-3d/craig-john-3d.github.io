
import $ from "jquery";
import Player from '@vimeo/player';
import APP from "./app.js"

APP.home = {
    _this : this,
    init : function(){
        console.log("init home");
        
    },
    show : function(dir){
        console.log("show home");
        APP.showPage($(".home"));
        setTimeout(function(){$(".home .page-title").addClass("aos-animate");},500);
		setTimeout(function(){$(".home .page-subtitle").addClass("aos-animate");},500);
    },
    hide: function(dir){
		APP.hidePage($(".home"));
		console.log("hide home");
	}
}
APP.projects = {
    _this : this,
    init: function() {
        $(".projects .list-item").on("click",function(){
            var link = $(this).attr("data-link");
            console.log("project item clicked : "+ link);
            APP.go(link, true);
        })
        
    },
    show : function(dir){
        console.log("show projects");
        APP.showPage($(".projects"));
        $(".projects .page-title").removeClass("aos-animate");
        $(".projects .page-subtitle").removeClass("aos-animate");
        setTimeout(function(){$(".projects .page-title").addClass("aos-animate");},500);
		setTimeout(function(){$(".projects .page-subtitle").addClass("aos-animate");},500);
    },
    hide : function(dir){
        console.log("hide projects");
        APP.hidePage($(".projects"));
        $(".projects .page-title").removeClass("aos-animate");
        $(".projects .page-subtitle").removeClass("aos-animate");
    }
    
}
APP.projectsDetail = {
    _this : this,
    init : function(){
        console.log("init project detail");
    },
    show : function(dir){
        console.log("show project detail");
        APP.showPage($(".projects-detail"));
        $(".projects-detail .page-title").removeClass("aos-animate");
        $(".projects-detail .page-subtitle").removeClass("aos-animate");
        $(".projects-detail .role").removeClass("aos-animate");
        $(".projects-detail .big").removeClass("aos-animate");
       
        setTimeout(function(){$(".projects-detail .page-title").addClass("aos-animate");},500);
		setTimeout(function(){$(".projects-detail .page-subtitle").addClass("aos-animate");},500);
		setTimeout(function(){$(".projects-detail .role").addClass("aos-animate");},500);
		setTimeout(function(){$(".projects-detail .big").addClass("aos-animate");},500);
		
    },
    hide: function(dir){
        console.log("hide project detail", dir);
        APP.hidePage($(".projects-detail"), dir);
        $(".projects-detail .page-title").removeClass("aos-animate");
        $(".projects-detail .page-subtitle").removeClass("aos-animate");
    },
    load : function(project){
        console.log("project.title", project.title);
        $(".projects-detail .page-title").html(project.title);
        $(".projects-detail .page-subtitle").html(project.subtitle);
        $(".projects-detail .role").html(project.role);
        $(".projects-detail .content").html(project.description+project.dev);
        console.log(project.id);
        switch(project.feature){
            case "video":
               var str = "<div class = 'feature-video sixteen-nine' id = 'feature-video'></div>";
               $(".projects-detail .feature-content").html(str);
               var options = {
                    id: project.id,
                    responsive: true,
                    loop: false,
                    autoplay: false,
                    byline: true,
                    title: true,
               }
               var vimPlayer = new Player('feature-video', options);
               vimPlayer.setVolume(1);
               vimPlayer.on('play', function(){
                console.log("video played");
               });
               vimPlayer.on('pause', function(){
                console.log("video paused");
               });
               vimPlayer.on('loaded', function(){
                console.log("video loaded");
               });
               break;
            case "gallery":
                var str = `
                    <div class="gallery">
                    <div class="slideshow-container">
                `;

                project.images.forEach(function(image) {
                    str += `
                    <div class="slide">
                        <img src="${image.src}" alt="${image.alt}">
                    </div>
                    `;
                });

                str += `
                    </div>
                    <div class="tabs"></div>
                    </div>
                `;
                $(".projects-detail .feature-content").html(str);
                var slides = $(".slide");
                var tabs = $(".tabs");
                

                for(var i = 0; i < slides.length; i++){
                    var tab = $('<div class="tab"></div>');
                    tabs.append(tab);
                }
                function showSlide(index) {
                    slides.hide();
                    slides.eq(index).fadeIn();
                }
            
                function nextSlide() {
                    var currentIndex = $(".slide:visible").index();
                    var nextIndex = (currentIndex + 1) % slides.length;
                    showSlide(nextIndex);
                }
            
                showSlide(0);
            
                setInterval(nextSlide, 6000);

                /*
                tabs.on("click",function() {
                    console.log("tab click");
                    var tabIndex = $(this).data('index');
                    showSlide(tabIndex);
                });
                */
                break;

        }

    },
    /*
    showSlide : function(index){
        var slides = $('.slide');
        var tabElements = $('.tab');
        slides.hide();
        slides.eq(index).fadeIn();
        tabElements.removeClass('active');
        tabElements.eq(index).addClass('active');
    },
    nextSlide : function(){
        var slides = $(".slide");
        var currentIndex = $('.slide:visible').index();
        var nextIndex = (currentIndex + 1) % slides.length;
        this.showSlide(nextIndex);
    }
    */
}
APP.about = {
    _this: this,
    init : function(){
        console.log("about init")
    },
    show : function(){
        console.log("show about");
        APP.showPage($(".about"));
        $(".about .page-title").removeClass("aos-animate");
        $(".about .big").removeClass("aos-animate");
        $(".about .content").removeClass("aos-animate");
        setTimeout(function(){
            $(".about .page-title").addClass("aos-animate");
            $(".about .big").addClass("aos-animate");
            $(".about .content").addClass("aos-animate");
        },800);
		
		
    },
    hide : function(){
        console.log("hide about");
        APP.hidePage($(".about"));
        $(".about .page-title").removeClass("aos-animate");
        $(".about .page-subtitle").removeClass("aos-animate");
    }
},
APP.menu = {
    _this : this,
    init : function(){
        console.log("init menu");
        $(".menu-item").on("click", function() {
           var link = $(this).attr("data-link");
           console.log("menu-item clicked : "+ link); 
           APP.go(link,true);
        });
        $(".menu-button").on("click", function(){
            $(".menu").toggleClass("active");
            $(".bar1").toggleClass("change");
            $(".bar2").toggleClass("change");
            $(".bar3").toggleClass("change");
        })
        
    },
    show: function(){
        console.log("show menu");
        $(".menu").addClass("active");
        
    },
    hide: function(){
        console.log("hide menu");
        $(".menu").removeClass("active");

    }
    
}
APP.header = {
    _this : this,
    init: function(){
        console.log("init header");
        $(window).on("scroll", function(){
            var distFromTop = parseInt($(this).scrollTop());

            if(distFromTop > 30){
                $(".header").addClass("shade");
            }
            else{
                $(".header").removeClass("shade");
            }
        })
    },
    show : function(){
        console.log("show header");
        $(".header").addClass("show");
    },
    hide: function(){
        console.log("hide header");
        $(".header").removeClass("show");
    }
}
APP.footer = {
    _this : this,
    init : function(){
        console.log("init footer");
    },
    show : function(){
        console.log("show footer");
        $(".footer-menu").addClass("show");
        $(".footer-menu").removeClass("hide");
    },
    hide : function(){
        console.log("hide footer");
        $(".footer-menu").removeClass("show");
        $(".footer-menu").addClass("hide");
    }
}
// Hide Pages
APP.hidePage = function (page) {
    $(page).removeClass("show");
    setTimeout(function () {
      $(page).addClass("hide");
    }, 1000);
  };
  
  // Show Pages
  APP.showPage = function (page) {
    setTimeout(function(){$(page).addClass("show"); AOS.refresh(); },100);	
    $(page).removeClass("hide");
    setTimeout(function () {
      $(page).addClass("show");
    }, 100);
  };

export default APP.hidePage;