# Mobile App Setup

For the initial react-native setup use:
  https://github.com/react-native-training/react-native-elements-app
  Make sure you are installing the option for 'Building Projects with Native Code' not 'Quick Start"
  
 Once setup is done make sure to be in the dnd folder
  Install dependencies (might require sudo):
    
    yarn install
    npm install
    react-native link
    
 Now once setup connect your android phone, or start the android emulator
 Make sure your device has debugging mode one, and can be seen in your computer with:
    
    adb devices
 
 To run the program on the phone run:
  
    react-native run-android
    
Once done you can read the logs with:
    
    react-native log-android

-----
Note:

While the backend is being setup use the the same setup as the small project but replace the views.py
Also the URI link that the app uses to connect is within index.js
    
    
    
