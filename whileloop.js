//while loop, repeat some code while some condition is true, potentially infinite, we check the condition first and then do something

let userName = "";
//condition
while (userName == "" || userName == null) {
  //do something
  userName = window.prompt("Enter Your Username");
}

console.log("hello ", userName);
