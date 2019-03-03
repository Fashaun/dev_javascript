What's this?

也許你在其他物件導向的程式語言曾經看過 this，也知道它會指向某個建構子 (constructor) 所建立的物件。 但在 JavaScript 裡，this 所代表的不僅僅是那個被建立的物件。

先來看看 ECMAScript 標準規範 對 this 的定義：

    「The this keyword evaluates to the value of the ThisBinding of the current execution context.」

        「this 這個關鍵字代表的值為目前執行環境的 ThisBinding。」

然後來看看 MDN 對 this 的定義：

    「In most cases, the value of this is determined by how a function is called.」

        「在大多數的情況下，this 會因為 function 的呼叫方式而有所不同。」


This 是什麼？

- this 是 JavaScript 的一個關鍵字。
- this 是 function 執行時，自動生成的一個內部物件。
- 隨著 function 執行場合的不同，this 所指向的值，也會有所不同。
- 在大多數的情況下， this 代表的就是呼叫 function 的物件 (Owner Object of the function)。
