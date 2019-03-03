var foo = 'foo';
var obj = {
  foo: 'foo in Object'
};

var sayFoo = function() {
  console.log( this.foo );
};

obj.sayFoo = sayFoo;

obj.sayFoo();   // ?
sayFoo();       // ?
