function a() {
  console.log(b) //10
}

var b = 10
a()

function x() {
  //x() is reference to the lexical parent of gobal EC, which is parent of x();
  var b = 20
  c() //c() is reference to the lexical parent of x(), which is parent of c();
  function c() {
    console.log(b) //20
  }
}

x()

/**
 * Lexical environment: Local memory + lexical environment of the parent.
 * Scope chain: It is the way of traversing all the current and parent layers the lexical environment.
 */
