var isSquare = function (n) {
    return isNaN(Math.sqrt(n)) ? false : (Math.sqrt(n) % 1 === 0) ? true : false;
}

console.log(isSquare(7)+": 7");
console.log(isSquare(64)+": 64");
console.log(isSquare(18)+": 18");
console.log(isSquare(225)+": 225");
console.log(isSquare(400)+": 400");