int trigPin = 11;    // Trigger
int echoPin = 12;    // Echo
long duration, cm1,cm2, inches1,inches2;
unsigned long sat = 108L;
int day = 0, hour = 11;
void setup() {
  //Serial Port begin
  Serial.begin (9600);
  //Define inputs and outputs
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  if (day == 5 && hour >= 16)
    delay(108000000);

  digitalWrite(trigPin, LOW);
  delayMicroseconds(5);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Read the signal from the sensor: a HIGH pulse whose
  // duration is the time (in microseconds) from the sending
  // of the ping to the reception of its echo off of an object.
  pinMode(echoPin, INPUT);
  duration = pulseIn(echoPin, HIGH);
  // Convert the time into a distance
  cm1 = (duration / 2) / 29.1;   // Divide by 29.1 or multiply by 0.0343
  inches1 = (duration / 2) / 74; // Divide by 74 or multiply by 0.0135
  if (cm1 > 400 || cm1 < 0)
    cm1 = 0;
  delay(120000);

  digitalWrite(trigPin, LOW);
  delayMicroseconds(5);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Read the signal from the sensor: a HIGH pulse whose
  // duration is the time (in microseconds) from the sending
  // of the ping to the reception of its echo off of an object.
  pinMode(echoPin, INPUT);
  duration = pulseIn(echoPin, HIGH);
  // Convert the time into a distance
  cm2 = (duration / 2) / 29.1;   // Divide by 29.1 or multiply by 0.0343
  inches2 = (duration / 2) / 74; // Divide by 74 or multiply by 0.0135
  if (cm2 > 400 || cm2 < 0)
    cm2 = 0;
  double big = cm1 > cm2 ? cm1 : cm2;
  if (abs(cm1 - cm2) > 100)
    Serial.print(big);
  else
    Serial.print(cm1 < cm2 ? cm1 : cm2);
  delay(21479985);//6 hours
  hour = hour + 6;
  if (hour > 24)
  {
    hour = hour % 24;
    day++;
    day = day % 7;
  }
}
