function func() {
  console.log( this.a );
}

var obj1 = { a: 2, foo: func };

var obj2 = { a: 3, foo: func };

// 隱含式綁定
obj1.foo();  // 2
obj2.foo();  // 3

// 顯式綁定
obj1.foo.call( obj2 );  // 3
obj2.foo.call( obj1 );  // 2
