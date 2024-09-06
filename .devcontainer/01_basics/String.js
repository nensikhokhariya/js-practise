const name = "Nensi "
const repoCount = 30

// console.log(name + repoCount + " value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nensi-patel')

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));


console.log('********Substring Example...*******');

const newString = gameName.substring(0, 4)  /// no nagative value enter
console.log(newString);

console.log('********Slice Example...*******');

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


console.log('********Trim Example...********');

// trim

const newStringOne = "   nensi    "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace

console.log('********Replace Example...********');

const url = "https://abc.com/nensi%20patel"
console.log(url.replace('%20', '-'));

console.log('********Ask Que Example...********');


console.log(url.includes('nensipatel'));
console.log(url.includes('nensi'));

console.log('********Split Example...********');


console.log(gameName.split('-'));
