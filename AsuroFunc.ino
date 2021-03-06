const int LEFT_BACKWARD = 10;
const int LEFT_FOREWARD = 9;
const int RIGHT_FOREWARD = 5;
const int RIGHT_BACKWARD = 3;
const int LEFT_PHOTOTRANSITOR = A0;
const int RIGHT_PHOTOTRANSITOR = A1;
const int STARTSPEED = 255;
const int STOP = 0;

void setup() {

  pinMode(LEFT_BACKWARD, OUTPUT);
  pinMode(LEFT_FOREWARD, OUTPUT);
  pinMode(RIGHT_FOREWARD, OUTPUT);
  pinMode(RIGHT_BACKWARD, OUTPUT);

  pinMode(LEFT_PHOTOTRANSITOR, INPUT);
  pinMode(RIGHT_PHOTOTRANSITOR, INPUT);

  analogWrite(LEFT_BACKWARD, 0);
  analogWrite(LEFT_FOREWARD, 0);
  analogWrite(RIGHT_FOREWARD, 0);
  analogWrite(RIGHT_BACKWARD, 0);
  Serial.begin(9600);

}

void loop() {
  delay(2500);
  startMotor();
  delay(2000);
  TurnLeft();
  startMotor();
  TrunRight();
}


int getspeedwheel_Left() {
  int l = 0;
  int readingleft;
  for (int i = 0; i <= 10; i++) {
    readingleft = analogRead(LEFT_PHOTOTRANSITOR);
    if (readingleft > 940)
    {
      l++;
    }
  }
  return l;
}

int getspeedwheel_Right() {
  int r = 0;
  int readingright;
  for (int i = 0; i < 1000; i++) {
    readingright = analogRead(RIGHT_PHOTOTRANSITOR);
    if (readingright > 940)
    {
      r++;
    }
  }
  Serial.println(r);
  return r;
}

void startMotor() {
  TurnStraight();
}

void TurnStraight() {
  digitalWrite(LEFT_BACKWARD, LOW); analogWrite(LEFT_FOREWARD, STARTSPEED - 10);
  digitalWrite(RIGHT_BACKWARD, LOW); analogWrite(RIGHT_FOREWARD, STARTSPEED);
}
void TurnLeft() {
  digitalWrite(LEFT_BACKWARD, LOW); analogWrite(LEFT_FOREWARD, STOP);
  digitalWrite(RIGHT_BACKWARD, LOW); analogWrite(RIGHT_FOREWARD, STARTSPEED);
  delay(625);
}

void TurnRight() {
  digitalWrite(LEFT_BACKWARD, LOW); analogWrite(LEFT_FOREWARD, STARTSPEED);
  digitalWrite(RIGHT_BACKWARD, LOW); analogWrite(RIGHT_FOREWARD, STOP);
  delay(625);
}


