function func() {
  console.log( this.a );
}

var obj = {
  a: 2
};

func();             // undefined
func.call(obj);     // 2
