/*Enter the two numbers
  and perform the operations:-
      "+" -> "-",
       "*" ->  "+",
       "-" -> "/",
        "/" ->  "**"
*/
        let a = prompt("Enter First number: ");
        let c = prompt("Enter operation: ");
        let b = prompt("Enter second number: ");

        let obj = {
            "+": "-",
            "*": "+",
            "-": "/",
            "/": "**"
        };

        c = obj[c];

        alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
   
