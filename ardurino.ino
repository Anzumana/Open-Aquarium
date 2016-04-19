void setup(){
  int sender = 1;
  pinMode(sender, OUTPUT);
  Serial.begin(9600);
  
}

void loop(){
  Serial.write("a"); 


}
