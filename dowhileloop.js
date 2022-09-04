//do While loop = do something, then check the condition, repeat if condition is true.
//in "do while loop" we check the condition last, uncomment the code below
let userName;
//do something,
do {
  userName = window.prompt("Enter Your Username");
} while (
  //then check the condition
  userName == ""
);

console.log("hello ", userName);