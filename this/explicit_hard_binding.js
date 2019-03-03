// 透過 .call() 包裝，使得 function 不管在哪裡執行， 其中的 this 都可以保持在我們所指定的那個物件上
function func() {
  console.log( this.a );
}

var obj = {
  a: 2
};

var obj2 = {
  a: 100
};

// Hard binding function
var hard_binding_func = function() {
  func.call( obj );
};

func();                 // undefined
func.call(obj);         // 2
func.call(obj2);        // 100

hard_binding_func();    // 2
hard_binding_func.call(obj2);  // 2

window.setTimeout( func, 10);  // undefined
window.setTimeout( hard_binding_func, 10);  // 2
