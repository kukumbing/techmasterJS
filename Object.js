var flight = {
    status: "Flying"
};

//Object is passed by reference by default
var byRefFlight = flight;

//This code really copies object to other instance
var byCopyFlight = Object.create(flight);

byRefFlight.status = "Landing";
console.log('flight.status = ' + flight.status + ". byRefFlight.status = " + byRefFlight.status);
//flight.status = Landing. byRefFlight.status = Landing

byCopyFlight.status = "Crash!";
console.log('flight.status = ' + flight.status + ". byCopyFlight.status = " + byCopyFlight.status);
//flight.status = Landing. byCopyFlight.status = Crash!


function armoured_vehicle(engine,weight,armor,machinegun){
    this.engine = engine;
    this.weight = weight
    this.armor = armor;
    this.machinegun = machinegun;

}

function tank(){
    armoured_vehicle.call(this);
}
tank.prototype = Object.create(armoured_vehicle.prototype);

tank.prototype.constructor = tank;
var m114 = new tank("diesel","40t","steel","20mm");

console.log(m114);
