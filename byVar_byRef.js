/**
 * Created by kukumbing on 7/16/2015.
 */
/*
var a = 1,
    b = { foo: 'bar' },
    c = "Rock start",
    a_ = a,
    b_ = b,
    c_ = c;

//non object type params are passed by value
//object type params are passed by reference
function makeChange(_a, _b, _c) {
    _a = 2;
    //arguments[1] = { foo: 'Fun qua' };
    _b.foo = 'Fun qua';
    _c = "Film Star";
}
makeChange(a, b, c);

console.log(a === a_); //=> true
console.log(b === b_); //=> true
console.log(c === c_); //=> true

console.log('a = ', a, ', b = ', b, ', c =', c);


function swap(a, b) {
    var tmp = a;
    a = b;
    b = tmp; //assign tmp to b
}

var x = 1, y = 2;
var tmp = x;
x = y;
y = tmp; //assign tmp to b
//swap(x, y);

console.log("x is " + x + " y is " + y); // "x is 1 y is 2"
 */

function realswap(obj){
    var tmp = obj.a;
    obj.a=obj.b;
    obj.b=tmp;
}

var obj={a:"quy",b:"vu"};
realswap(obj);

console.log(obj.a,obj.b);