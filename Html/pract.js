var x = 100;

function hoist() {
  console.log(x);
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();
