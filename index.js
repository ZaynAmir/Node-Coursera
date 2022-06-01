let rect = require('./rectangle')

function solveRect(l,b){
    console.log("Solving for rectangle for l = " + l + " and b = " + b);
    if (l <= 0 || b <= 0){
        console.log("values should be greater than zero , l = " + l + " and b = " + b);
    }
    else{
        console.log("The Area of the rectangle is " + rect.area(l,b));
        console.log("The Perimeter of the rectangle is " + rect.perimeter(l,b));
    }
}

solveRect(2,5);
solveRect(4,5);
solveRect(-2,5);
solveRect(0,5);