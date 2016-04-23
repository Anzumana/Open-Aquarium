var five = require("johnny-five");

five.Board().on("ready", function() {
	// 
	currentTime();
	initAsuro();
	// This is our runloop that checks for our agent (asuro) if we have to change anything
	setInterval(function() { 
		checkProximity();
		checkLigh();
		checkMovement();
	},1000);
	/**
	 * Funtion for our initial Setup
	 *
	 */
	function initAsuro(){
		console.log(arguments.callee);
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

	}
	this.repl.inject({
		lightsOn: function(){
			lightsOn();
		},
		lightsOff: function(){
			lightsOfff();
		},
		foo: function(){
			foo();
		}
	});
});
//short log to see that our programm has started
console.log("Waiting for device to connect");
