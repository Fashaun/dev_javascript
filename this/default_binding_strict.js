var a = 123;
console.log( window.a );

function foo(){
  "use strict";
  // this === undefined 宣告成嚴格模式後，原本預設將 this 綁定至全域物件的行爲，會轉變成 undefined
  console.log( this.a );
}

foo(); // TypeError
