/**
 * Created by kukumbing on 7/12/2015.
 */


var mantra = "Vung oi "+"mo cua ra";

console.log(mantra);

console.log(mantra.indexOf(" "));
console.log(mantra.lastIndexOf(" "));

console.log(mantra.search(" "));

console.log(mantra.search(/u|o/g));

var str = "Apple, Banana, Kiwi";
var fruits = str.split("o");
console.log(fruits[1]);


function employee(name,jobtitle,born)
{
    this.name=name;
    this.jobtitle=jobtitle;
    this.born=born;
}

var fred=new employee("Fred Flintstone","Caveman",1970);
//employee.salary=null;
fred.salary=20000;

console.log(fred.salary);

