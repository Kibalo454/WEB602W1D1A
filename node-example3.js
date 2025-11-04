const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};
function solveRect(l,w) {
    console.log('Solving for rectangle with dimensions: ${1}, ${w}'); // L and W
    if(1<=0 || w<=0) {
        console.log('Rectangle dimensions should be greater than zero: ${1}, ${w}'); // Prevents rectangle values less than 1
    } else {
        console.log('Area of rectangle is ${rect.area(1,w)}'); // Area
        console.log('perimeter of rectangle: $(rect.perimeter(1,w)}'); // Perimeter
    }
}

solveRect(6,7);
solveRect(8,1);
solveRect(0,9);
solveRect(4, -1);
