console.log('Hello Word!!');

//Factory Function 
function createCircle(radius) {
    return {        
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(2);

//Constructor Function
function Circle(radius) {
    console.log('this',this);
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}
const another = new Circle(1);