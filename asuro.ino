String incomingString; 

void setup() {
        Serial.begin(9600);     // opens serial port, sets data rate to 9600 bps
        pinMode(8,INPUT);
}

void loop() {

        // send data only when you receive data:
        if (Serial.available() > 0) {
                // read the incoming byte:
                incomingString = Serial.readString();

                // say what you got:
                Serial.print("I received: ");
                Serial.println(incomingString+"\n");
        }
}
