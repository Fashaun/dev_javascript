var obj = {

  func1: function(){
    console.log( this === obj );

    var func2 = function(){
      // 這裡的 this 跟上層不同！
      console.log( this === obj );
    };

    func2();
  }
};

obj.func1();
