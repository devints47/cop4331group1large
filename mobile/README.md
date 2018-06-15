# Mobile App Setup

For the initial react-native setup use:
  https://github.com/react-native-training/react-native-elements-app
  Make sure you are installing the option for 'Building Projects with Native Code' not 'Quick Start"
  
 Once setup is done make sure to be in the dnd folder
  Install dependencies:
    
    yarn add react-native-elements
       or if you use npm
    npm i react-native-elements --save
    
    yarn add react-native-vector-icons    
      or if you use npm
    npm i --save react-native-vector-icons
    
    react-native link react-native-vector-icons
    
 Now once setup connect your android phone, or start the android emulator
 Make sure your device has debugging mode one, and can be seen in your computer with:
    
    adb devices
 
 To run the program on the phone run:
  
    react-native run-android
    
Once done you can read the logs with:
    
    react-native log-android
    
    
    
