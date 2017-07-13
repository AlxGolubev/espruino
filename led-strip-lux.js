const moveChecker = P13;
const lightSensor = require('@amperka/light-sensor').connect(A0);
const ledStrip = P8;
var watchId = NaN;

let toggleLedStrip = function(event) {
  console.log(event);
  if(event.state) {
    digitalWrite(ledStrip);
  } else {
    digitalRead(ledStrip);
  }
};

setInterval(function() {
  if (lightSensor.read('lx') < 1 && isNaN(watchId)) {
    console.log('configured');

    watchId = setWatch(
      toggleLedStrip,
      moveChecker,
      { repeat: true, edge: "both" }
    );
  } else if (lightSensor.read('lx') > 1 && !isNaN(watchId)) {
    console.log('cleaned');
    clearWatch(watchId);
    digitalRead(ledStrip);
    watchId = NaN;

  }
}, 10000);

