/**
 * Created by kukumbing on 7/10/2015.
 */
"use strict";
var pets = ["dog","tiger","cat","bear"];

console.log(pets.valueOf());

for(let i=0;i<4;i++){
    console.log(pets[i]);
}

console.log(pets.join(" and "));

pets.push("elephant");
pets.push("zebra");
pets.push("crocodile");

console.log(pets);

/*
while (pets.length>0){
    pets.pop();
    console.log(pets.valueOf());
}


while (pets.length>0){
    pets.shift();
    console.log(pets.valueOf());

}*/

console.log(pets.reverse());
pets[1].delete;
console.log(pets);


