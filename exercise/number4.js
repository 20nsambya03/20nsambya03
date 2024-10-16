let age = 18;
if (age<65){
    console.log("you are eligible to work.");

}else{
    console.log("you are of retirement age.");
} {
   console.log("you are too young to work."); 
}


//a code using a single if-else structure without nesting
let age = 18;

if (age < 65) {
    console.log("You are eligible to work.");
  } else {
    if (age >= 65) {
      console.log("You are of retirement age.");
    } else {
      console.log("You are too young to work.");
    }
  }