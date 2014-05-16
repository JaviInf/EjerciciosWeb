sudo npm install -g phonegap
sudo npm install -g ios-sim

mkdir PhoneGap
cd PhoneGap/
phonegap create earthquake com.example.earthquake EarthQuake
phonegap build ios
phonegap install ios