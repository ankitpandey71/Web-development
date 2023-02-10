function Prime(num) {
  console.log(num);
  if (num === 1) {
    console.log("num1");
    console.log("Neither Prime nor Composite");
  }
  if (num > 1) {
    console.log("num if esle");
    for (let i = 2; i < num; i++) {
      console.log("for", i);
      if (num % 2 == 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(Prime(8));
