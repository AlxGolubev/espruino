const moveChecker = P13;
const lightSensor = require('@amperka/light-sensor').connect(A0);

let syncLedWithMoveChecker = function(event) {
  console.log(event);
  console.log(lightSensor.read('lx'));
  if(lightSensor.read('lx') < 1) {
    analogWrite(P12, event.state); 
  }
};

setWatch(syncLedWithMoveChecker, moveChecker, {repeat:true, edge:"both"});