let myDate = new Date()

console.log(myDate);

// convert into string
console.log('convert into string : ');
console.log(myDate.toString());

// date function

console.log('toDate string : ');
console.log(myDate.toDateString());


// tolocal function

console.log('toLocal string :');
console.log(myDate.toLocaleString());

console.log(typeof myDate)  // object type

console.log('------------new create date-------------');

let myCreatedate = new Date(2023, 0, 23)
console.log(myCreatedate.toDateString());

console.log('------------new localstring date time-------------');

let myCreatedatetime = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedatetime.toLocaleString());

console.log('------------date formated-------------');

let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());

console.log("--------------myTimeStamp-------------------");

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());   // month



