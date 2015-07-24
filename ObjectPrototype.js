

function computer(cpu,status){
    this.cpu = cpu;
    this.status = status;
}


var mac = new computer("intel","on");
var pc = new computer("amd","off");

computer.prototype.price;

computer.prototype.print = function(text){

    console.log("This",text," computer with ",this.cpu," CPU is ",this.status);

}


mac.price = 1000;
pc.price = 500;
mac.print("Mac");
pc.print("PC");

mac.icon = "apple";

console.log(mac);
console.log(pc);