var five = require("johnny-five")

five.Board().on("ready", function() {
	// read the current Temperature
  var temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  temperature.on("data", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });

	// turn on led on pin 
	this.pinMode(13, five.Pin.PWM);
	this.analogWrite(13, 255);
	// try to send data to pin 1 and receive data on the asuro
	// todo this worked however the received data was not the send data for some point.
	// looked like voltage
	this.pinMode(1, five.Pin.PWM);
	this.analogWrite(1, 21);
});
console.log("Waiting for device to connect");
