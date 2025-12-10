
// array used to show language 
const array_language = ["php", "css", "js", "c", "java"];
for (let key in array_language) {
    console.log(key, array_language[key])
  }
 const language = ["php", "css", "js", "c", "java"];
 console.log(language.length)

 for (let i=0; i< language.length; i++){
    console.log(language[i]);
 }
  for (let i=0; i< language.length; i++){
    console.log(language[3]);
   
 }
//  generate the percentage and GPA 
 const Ram_marks = {
    social: 99,
    science: 98,
    math: 99,
    computer:100,
}
let per = 6.098765
let per1 =math.floor(per)
console.log(math.random()*1000);



const marks=[9,99,100]
let totalmarks=0;
let isfail= false
for (let index = 0; index < marks.length; index++) {
  console.log (marks[index]);
  if (marks[index] <30) {
    isfail = true;
  }
    totalmarks=  marks[index] + totalmarks ;
}

if (isfail){
    console.log("you fail")
    return
}
else{
    console.log("you have passed")
}
percentage=totalmarks*100/300
let percentage1= Math.floor(percentage)
 console.log("the total percent" ,percentage1)
console.log("the GPA is", percentage1/25)
