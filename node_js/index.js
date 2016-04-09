var five = require("johnny-five");

five.Board().on("ready", function() {
  var temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  temperature.on("data", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });
});
console.log("Waiting for device to connect");
