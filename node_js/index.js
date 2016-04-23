/*jshintsversion: 6 */
var five = require("johnny-five");
const ALLOWED_DISTANCE  = 5;//in cm

five.Board().on("ready", function() {
	  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7,
  });
var a;


  proximity.on("change", function() {
		console.log("Proximity:" + this.cm);
		var distanceToObject = this.cm;
		if(distanceToObject < ALLOWED_DISTANCE){
			asuroStop();
		}
  });
	//Define Varaibles for all the pins that we need to talk too
	//samplePin 13 since we can always test with this one
	var led = new five.Led(13);
	// 
	currentTime();
	initAsuro();
	// This is our runloop that checks for our agent (asuro) if we have to change anything
	setInterval(function() { 
		checkProximity();
		checkLigh();
		checkMovement();
	},5000);
	function asuroStop(){
		console.log("asuroSTop");
		console.log(arguments.callee);
	}
	/**
	 * Funtion for our initial Setup
	 *
	 */
	function initAsuro(){
		console.log(arguments.callee);
		lightsOn();
	}
	/**
	 * Simple Function with console log of foo string
	 * @param {void} 
	 * @return {void} 
	 *
	 */
	function foo(){
		console.log("foo");
	}
	function currentTime(){
		var time = new Date();
		process.stdout.write(time.getHours()+":"+  time.getMinutes()+  ":" +time.getSeconds()+ " ");
	}
	/**
		* Checks if anything is to close to our proximity sensor
		* @return {bool} returns true if something is to close 
		 *
	*/
	function checkProximity(){
		currentTime();
		console.log(arguments.callee);
	}
	/**
		* Checks if there is enough light around us 
		* @return {bool} return true if it is too dark
		*
	*/
	function checkLigh(){
		currentTime();
		console.log(arguments.callee);
	}
	/**
		* Check if there is any movement around us
		* @return {bool} return true if there is movement
		*
	*/
	function checkMovement(){
		currentTime();
		console.log(arguments.callee);
	}
	// this function is not working 
	function startReadingTemperature(dont, use ,yet){
		var temperature = new five.Thermometer({
			controller: "TMP36",
			pin: "A0"
		});
  	temperature.on("data", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  	});
	}
	/**
		* Turns on all the lights that we want to have on when it to dark
		*
	*/
	function lightsOn(){
		led.on();
	}
	function lightsOff(){
		led.off();
	}
	this.repl.inject({
		lightsOn: function(){
			lightsOn();
		},
		lightsOff: function(){
			lightsOff();
		},
		foo: function(){
			foo();
		}
	});
});
//short log to see that our programm has started
console.log("Waiting for device to connect");
