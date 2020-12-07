"use strict";
var sidebarResizeHandle = document.getElementById("infobar_resize");

sidebarResizeHandle.addEventListener('mousedown', initResize, false);

function initResize(e) {
    window.addEventListener('mousemove', resize, false);
    window.addEventListener('mouseup', stopResize, false);
    html.classList.add('sidebar-resizing');
}
function resize(e) {
    document.documentElement.style.setProperty('--sidebar-width', (e.clientX - sidebar.offsetLeft) + 'px');
}
//on mouseup remove windows functions mousemove & mouseup
function stopResize(e) {
    html.classList.remove('sidebar-resizing');
    window.removeEventListener('mousemove', resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}