function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
}

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
}


// convert to arrow function notation

function doubleArrow(arr) {
    return arr.map((val) => val * 2);
}

function squareAndFindEvensArrow(numbers) {
    var squares = numbers.map((num) => num ** 2);
    var evens = squares.filter((num) => num % 2 === 0);
    return evens;
}