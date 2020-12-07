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
    
    console.trace("hello 1");
    window.addEventListener('mousemove', resize, false);
    window.addEventListener('mouseup', stopResize, false);
    html.classList.add('sidebar-resizing');
}
function resize(e) {
    var ev = window.Event;
    console.trace("hello 2");
    document.documentElement.style.setProperty('--sidebar-width', mousex + 'px');
}
//on mouseup remove windows functions mousemove & mouseup
function stopResize(e) {

    console.trace("hello 3");
    html.classList.remove('sidebar-resizing');
    window.removeEventListener('mousemove', resize, false);
    window.removeEventListener('mouseup', stopResize, false);

}

function insert(a){

    
}