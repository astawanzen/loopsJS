//nested loop = a loop inside of another loop
//we will repeat the inner loop 3 times cuz the i <= 3 in outer loop
/*for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
};*/

//draw rectangle within a dom
//the outer loops "i<=row" will be in charge for rows
//the inner loops "j<=columns" will be in charge for columns
let symbol = window.prompt("enter a symbol to use");
let rows = window.prompt("enter the number of rows");
let columns = window.prompt("enter number of columns");

for (let i = 1; i <= rows; i++) {
  //print one row
  for (let j = 1; j <= columns; j++) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
};
