function func(something) {
  this.a = something;
}

var obj1 = { foo: func };
var obj2 = {};

// 以參數帶入，則 this 為物件本身
obj1.foo( 2 );
console.log( obj1.a );    // 2

// 透過 call 強至指定 this
obj1.foo.call( obj2, 3 );
console.log( obj2.a );    // 3

// this = 建構子所產生的物件
var bar = new obj1.foo( 4 );
console.log( obj1.a );    // 2
console.log( bar.a );     // 4
