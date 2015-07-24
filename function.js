"use strict";
function greet(){

    console.log("Hello!");

}

greet.hoitham = function(){
    console.log("How are you?");

};

greet.hoitham.amfine = function()
{
    console.log("I'm fine,thank you");

};

greet();

greet.hoitham();

greet.hoitham.amfine();

function calculate(a,b,operator){
    switch(operator){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        default :
            console.log("khong hop le!");
            break;
    }

}

console.log(calculate(12,13,'/'));
/*
function check(a,b){
    if (a!=='number'||b!=='number') {break;}
    else return function()
}
*/

function buildahouse(type){
    function makepilar(){
       console.log("building the",type," houses pilars!");
    }
    function makewall(){
        console.log("building the houses walls!");
    }

    makepilar();
    makewall();
}


buildahouse('wood');

var numberObj = function(val) {
    var value = parseFloat(val);
    //Closure. Google closure javascript
    return { //return a object that have two properties: absolute and square
        absolute: function() {
            return value > 0 ? value : -value;
        },
        square: function(){
            return value * value;
        }
    };
}(-20)

console.log(numberObj.absolute(), numberObj.square());
console.log(numberObj);
