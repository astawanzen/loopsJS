//break =breaks out of a loop entirely
//continue = skip an iterationof a loop
//counting from 1 to 20, but i want to stop at 9
for (let i = 1; i <= 20; i++) {
  //if it is reach the 10, then break same thing for continue it will skip the "10" number
  if (i == 9) {
    continue;
  }
  console.log(i);
};
