//Factory method
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    }
}
const circle = createCircle(1);

//Constructor Function
function Circle(radius){
    console.log('this',this);
    this.radius = radius;
    this.draw = function(){
        console.log('draw from constructor');
    }
}
const another = new Circle(10);
another.draw();



