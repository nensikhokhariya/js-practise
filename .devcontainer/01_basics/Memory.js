// Stack memory (primitive) = Vriable Diclare Copy ,  Heap Memory (None Primitive) = Reference of Original Value


let youtubeName = "nensikhokhariya"

let anotherYoutubename = youtubeName
anotherYoutubename = "chaiorcode"

console.log(youtubeName);
console.log(anotherYoutubename);


let userOne = {
    email: "abc@google.com",
    upi: "abc@ybl"

}

let userTwo = userOne

userTwo.email = "abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);



