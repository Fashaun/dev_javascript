var a = 123;
console.log( window.a );

function foo(){
  // this === window
  console.log( this.a );
}

foo(); // 123
