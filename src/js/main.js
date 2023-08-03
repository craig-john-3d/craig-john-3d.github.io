import $, { event } from "jquery";
import "./webgl.js";
import "./views.js";
import "../data/site.js";
import APP from "./app.js";


APP.init = function() {
    var _this = this;
    var url = window.location.pathname; // Get the current URL
    var sections = url.split("/"); // Split the URL into sections

    $(".page").addClass("hide");
  
    // Assign section and page based on the URL
    var section = sections[1] || "webgl";
    var page = sections[2] || "";
  
    // Initialize All
    console.log("init");
    APP.home.init();
    APP.projects.init();
    APP.menu.init();
    APP.footer.init();
    APP.header.init();
    APP.projectsDetail.init();
    

  
    this.state = section; // Set the state to the current section
    if (page) {
      this.state += "/" + page; // Add the page to the state if it exists
    }
  
    console.log(this.state);
    
    
    if(sections[1] == "projects" && page){
        console.log("page",page);
        var project = this.getProjectByLink(page);
        APP.projectsDetail.load(project);
        APP.showPage(".projects-detail");
        
    }
    else{
        APP.showPage("." + this.state);
    }

    if(this.state == "home"){
        APP.footer.show();
        APP.header.hide();
        APP.menu.hide();
    }
    else{
        APP.header.show();
        APP.footer.hide();
    }
    if(this.state == "webgl"){
        APP.header.hide();
        APP.webGL.init();
    }
    APP.go(this.state, false);
  }
window.onpopstate = function(event){
    var state = (event.state);
    if(!state){
        state = "home";
    }
    if(state == "/"){
        state = "home";
    }
    APP.go(state,false);
}
// Check for screen size on resize
window.onresize = function(){
    const screenWidth = window.innerWidth;
    if (screenWidth >= 801) {
        APP.menu.hide();
    } else {
  
    }
}


APP.go = function(state, storeHistory){
    
    if(this.state == state) {
        return false;
    }
    console.log("state", state);
    console.log("this.state", this.state);
    console.log("Change state")
    var path = state.split('/');
    console.log("path", path);
    if(path[0]){
        this.section = path[0];
    }
    if(path[1]){
        var page = path[1];
    }
    var fromPath = this.state.split('/');
    if(fromPath[0]){
        var fromSection = fromPath[0];
    }
    if(fromPath[1]){
        var fromPage = fromPath[1];
    }
    var p = "./";
    if(fromPage){
        p = "../";
    }
    if(this.section){
        console.log("section", this.section);
    }
    if(page){
        console.log("page", page);
    }

    console.log("From Section", fromSection);
    switch(fromSection){
        case "webgl":
            APP.webGL.hide();
            break;
        case "home":
            APP.home.hide();
            break;
        case "about":
            APP.about.hide();
            break;
        case "projects":
            if(fromPage){
                APP.projectsDetail.hide();
            }
            else{
                APP.projects.hide();
            }
            break;
    }
    switch(this.section){
        case "webgl":
            var title = APP.data.splash.title;
            document.title = APP.data.splash["page-title"];
            if(storeHistory){
                history.pushState(state,title,p);
            }
            APP.state = state;
            APP.webGL.show();
            break;
        case "home":
            var title = APP.data.home.title;
            document.title = APP.data.home["page-title"];
            if(storeHistory){
                history.pushState(state, title, p + state);
            }
            APP.state = state;
            APP.home.show();
            break;
        case "about":
            var title = APP.data.about.title;
            document.title = APP.data.about["page-title"];
            if(storeHistory){
                history.pushState(state,title, p + state);
            }
            APP.state = state;
            APP.about.show();
            break;
        case "projects":
            if(page){
                var project = this.getProjectByLink(page);
                console.log(project);
                if(project){
                    setTimeout(function(){APP.projectsDetail.load(project);}, 800);
                }
                if(storeHistory){
                    history.pushState(state, title, p + state);
                    APP.state = state;
                    document.title = project['page-title'];
                    setTimeout(function(){APP.projectsDetail.show();}, 1000);
                }
            }
            else{
                var title = APP.data.projects.title;
                document.title = APP.data.projects["page-title"];
                setTimeout(function(){
                    APP.projects.show();
                },0);
                if(storeHistory){
                    history.pushState(state, title, p + state);
                }
                APP.state = state;
            }
            break;
    }
    if(this.state == "home"){
        setTimeout(function(){
            APP.footer.show();
            APP.header.hide();
            APP.menu.hide();
        }, 500);
    }
    else{
        setTimeout(function(){
            APP.footer.hide();
            APP.header.show();
        }, 500);
    }

    setTimeout(function(){
		$('html,body').animate({ scrollTop: 0 },1000);
        
	},50);
}
APP.getProjectByLink = function(link){
    var projects = APP.data.projects.list;
    for(var i = 0; i < projects.length; i++){
        if(projects[i].link.split("/")[1] === link){
            return projects[i];
        }
    }
    return null;
}

APP.init();

export default APP;