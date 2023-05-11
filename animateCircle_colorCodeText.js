var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;

window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

var circlrArray = [];
var colorArray = [];

for (var i = 0; i < 200; i++) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var c = 0; c < 6; c++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    colorArray.push(color);
}
console.log(colorArray);


var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

var c = canvas.getContext('2d');
var t = canvas.getContext('2d');

window.addEventListener('resize', function () {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 4;
})




function Circle(x, y, dx, dy, radius, color, txt, txtColor) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color;
    this.txtColor = "transparent";
    this.txt = txt;

    this.draw = function () {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.strokeStyle = this.color;
        c.stroke();
        
       
            t.beginPath();
            t.font = this.radius+"px Georgia";
            t.fillStyle = this.txtColor;
            t.fillText(this.txt, this.x + this.radius, this.y);
        
       
        
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }


        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
                this.txtColor = color;
            }

        } else if (this.radius > this.minRadius) {
            this.radius += -1;
            if(this.radius <= this.minRadius){
               this.txtColor = "transparent";
               }
        }

        this.draw();

    }

}



for (var i = 0; i < 200; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() - 0.5) * 1;
    var radius = Math.random() * 20 + 1;
    var color = colorArray[i];
    var txtColor = colorArray[i];
    var txt = colorArray[i];
    circlrArray.push(new Circle(x, y, dx, dy, radius, color, txt, txtColor));

}
console.log(circlrArray);



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (var p = 0; p < circlrArray.length; p++) {

        circlrArray[p].update();
    }


}

animate();
