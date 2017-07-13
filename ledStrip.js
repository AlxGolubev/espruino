const moveChecker = P13;
const ledStrip = P8;

const toggleLedStrip = function(event) {
  if (event.state) {
    digitalWrite(ledStrip);
  } else {
    digitalRead(ledStrip);
  }
};
setWatch(toggleLedStrip, moveChecker, {repeat:true, edge:"both"});

