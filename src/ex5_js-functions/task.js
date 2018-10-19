'use strict';

var Calculator = {
    result: 0
};

Calculator.add = function add(arg){
    if (!isNaN(arg)){
        Calculator.result+=arg;
    }
    return add;
};
Calculator.subtract = function subtract(arg){
    if (!isNaN(arg)){
        Calculator.result-=arg;
    }
    return subtract;
};
Calculator.divide = function divide(arg){
    if (!isNaN(arg)){
        Calculator.result/=arg;
    }
    return divide;
};
Calculator.multiply = function multiply(arg){
    if (!isNaN(arg)) {
        Calculator.result*=arg;
    }
    return multiply;
};
Calculator.getResult= function(){
    return this.result;
};
Calculator.reset = function(){
    Calculator.result = 0;
};

module.exports = Calculator;
