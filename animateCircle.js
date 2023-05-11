var letters = '0123456789ABCDEF';
var color = '#';
for (var c = 0; c < 6; c++){
    color += letters[Math.floor(Math.random()*16)];
}


var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');




var x = 300;
var y = 300;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 10;

var x2 = 250;
var y2 = 250;
var dx2 = (Math.random() - 0.5) * 8;
var dy2 = (Math.random() - 0.5) * 8;
var radius2 = 10;


function animate() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    requestAnimationFrame(animate);
    
    
    c.fillStyle = color;
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fill();
    c.stroke();
    
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    
    
    x += dx;
    y += dy;
    
    
    
} 

animate();

