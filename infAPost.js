class ExpresionInfija {
  constructor(cadenaOperacion) {
    this.array = cadenaOperacion.split(" ");
  }
  InfijoAPostfijo() {
    let i,
      arr = new Array(),
      pilaOp = new Array(),
      temp = null;
    for (i = 0; i < this.array.length; i++) {
      if (this.array[i] >= "0" && this.array[i] <= "9") arr.push(this.array[i]);
      else if (this.array[i] == "^") {
        if (temp === "^") arr.push(pilaOp.pop());
        pilaOp.push(this.array[i]);
        temp = pilaOp[pilaOp.length - 1];
      } else if (this.array[i] == "*" || this.array[i] == "/") {
        while (temp == "^" || temp == "*" || temp == "/") {
          arr.push(pilaOp.pop());
          temp = pilaOp[pilaOp.length - 1];
        }
        pilaOp.push(this.array[i]);
        temp = this.array[i];
      } else {
        // [-]  temp=-
        while (pilaOp.length > 0) arr.push(pilaOp.pop());
        pilaOp.push(this.array[i]);
        temp = this.array[i];
      }
    }
    while (pilaOp.length > 0) arr.push(pilaOp.pop());
    return arr;
  }
  EvaluarPostfijo(array) {
    let car,
      i,
      nums = new Array(),
      op1,
      op2,
      res;
    for (i = 0; i < this.array.length; i++) {
      car = this.array[i];
      if (car >= "0" && car <= "9") nums.push(car);
      else {
        op2 = nums.pop();
        op1 = nums.pop();
        if (car == "+") res = op1 + op2;
        else if (car == "-") res = op1 - op2;
        else if (car == "/") res = op1 / op2;
        else if (car == "*") res = op1 * op2;
        else if (car == "^") res = op1 ^ op2;
        nums.push(res);
      }
    }
    return nums.pop();
  }
}

let infijo = new ExpresionInfija("2 + 1 * 3 * 4 / 6 + 4 - 2 + 9 / 3"),
  expresion = infijo.InfijoAPostfijo();
console.log(expresion);
console.log(infijo.EvaluarPostfijo(expresion));
