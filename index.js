//Factory function
//we use returnn statement

function createcCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    }
};
createcCircle(2).radius;

//Constructor Function
//First letter of the function name must be Upper
//we use this statement instead of return along with new

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}