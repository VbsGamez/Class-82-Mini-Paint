var me="empty";
var lastX,lastY;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
colour="blue";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    me="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    cp_X=e.clientX-canvas.offsetLeft;
    cp_Y=e.clientY-canvas.offsetTop;
    if (me=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(cp_X,cp_Y);
        ctx.stroke();
    }
    lastX=cp_X;
    lastY=cp_Y;
    
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    me="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    me="mouseleave";
}