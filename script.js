let num = 3;
const x = true;
let num3 = "hello subi its string"
const person = {
    firstname: "subi",
    lastname: "bhamdari",
    age: 25,
}

console.log(num);
console.log(x);
console.log(num3);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
for (let key in person) {
    console.log(key, person[key])
}
let array = [1, 2, 3, 4, 5,]
console.log(array)

let cars = ["saab", "volvo", "BMW"]
cars.forEach(item => console.log(item))

let r;
console.log(r)

let a = 2;
let b = 2;
console.log(a + b);

const age = 18;
if (age > 18) {
    console.log("it is child");

}
else {
    console.log("it is adult");
}
function myfunction(){
    console.log("this is function",s);
}
const s=12;
myfunction(s);