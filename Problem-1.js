// const a = Number(prompt("Please enter enter a value for a:"));
// const b = Number(prompt("Please enter enter a value for b:"));
// const operation = prompt("Please enter the type of operation");
// let res;

// switch(operation){
//     case "+":
//         res = a+b;
//         break;
//     case "-":
//         res = a-b;
//         break;
//     case "*":
//         res = a*b;
//         break;
//     case "/":
//         res = a/b;
//         break
// }

// console.log(res);
let res;
class Calculator{
    constructor(a, b, operation){
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    operationFun(){
        switch(this.operation){
            case "+":
                 res = this.a+this.b;
                 break;
            case "-":
                res = this.a-this.b;
                break;
            case "*":
                res = this.a*this.b;
                break;
            case "/":
                res = this.a/this.b;
                break;
            default:
                console.log("Please enter correct type of operation");

        }
        console.log(res);
    }
}

const a = Number(prompt("Enter a value for a: "));
const b = Number(prompt("Enter a value for b: "));
const operation = prompt("Enter the type of operation: ");
const calculation = new Calculator(a, b, operation);
calculation.operationFun();