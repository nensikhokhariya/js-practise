const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);


// Number function

// constructor
// toExponential
// toFixed
// toLocaleString
// toPrecision
// toString
// valueOf
 
console.log('***to string function***');

console.log(balance.toString().length);


console.log('***to fixed function***');
console.log(balance.toFixed(2));

console.log('***toPrecision function***');

const otherNumber = 23.8695
console.log(otherNumber.toPrecision(3));


console.log('***toLocaleString function***');


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //indian standard type add comma

