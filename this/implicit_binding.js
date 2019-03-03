function func() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: func
};

func();       // undefined
obj.foo();    // 2
