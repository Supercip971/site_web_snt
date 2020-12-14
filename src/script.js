"use strict";
var html;
var mousex = 0;
function init(){
    var sidebarResizeHandle = document.getElementById("infobar_resize");

    sidebarResizeHandle.addEventListener('mousedown', initResize, false);
    html = document.getElementById("html_id");
    onmousemove = function(e){ mousex = e.x}

}
function initResize(e) {
    
    window.addEventListener('mousemove', resize, false);
    window.addEventListener('mouseup', stopResize, false);
    html.classList.add('sidebar-resizing');
}
function infobar_call(id){
    if(id == 1){
        window.open("index.html");
    }
    else if(id == 2){
        window.open("programmation.html");
    }
    else if(id == 3){
        window.open("projet.html");
    }
}
function resize(e) {
    var ev = window.Event;

    document.documentElement.style.setProperty('--sidebar-width', mousex + 'px');
}
//on mouseup remove windows functions mousemove & mouseup
function stopResize(e) {

    
    html.classList.remove('sidebar-resizing');
    window.removeEventListener('mousemove', resize, false);
    window.removeEventListener('mouseup', stopResize, false);

}

function insert(a){

    
}
function toggle_popup(txt){
    document.getElementById(txt).classList.toggle('notshow');
}
