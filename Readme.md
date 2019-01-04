# Insider Mobile Demo App - iGurme

Demo app written with react native to test and display features of insider mobile SDK. Check out useinsider.com for more information about the SDK, and what it can do. You can use this application to bootstrap your app, examine to learn react-native or to do testing.

## Dependencies
This app created with minimal dependencies. Only dependencies required are:
- react-native-firebase
- react-native-swipeout
- react-native-vector-icons
- react-navigation

In the future I'm planning to create different branches with/without firebase and swipeout.

## Project structure
This application developed with a project structure that I believed to be an easy and flexible way to maintain a react native app.
- Folder structure:
  - iOS: Native iOS file, you can find xcode workspace file here. I have implemented pods for easier usage
  - Android: Native Android file
  - src: JavaScript source files for React-Native
    - components: main components used in the application goes here. Using props to interact with components advised
    - context: Data structures and functions created with React Context API goes here. This components critical for background processes and data handling. Since context API updates state of the components it connected to, this API decreases development time significantly and its perfect for authentication
    - resources: any picture, font, color... used in the application. Using a colors file for all colors in the application, helps development and creates consistency. Using a strings file helps you translate your application faster
    - scenes: screens users interact with is here. This screens takes data from context, and components from components and processes that data to create visual elements with components.
    - App.js: This is the entry point for application. Navigation routes, notification structure, services required and context should be initialized here

While developing this application I also used a few key principles:
 - Components instead of styles
   I used components instead of creating unified style sheets since it gives me so much more flexibility
 - Props instead of state
   Using props in components helped me design application better with handling any change in scenes. However animations should be in component state.
 - Styling via percentage and props instead of pixels
   Using percentage in styling and sending extra information from scene to component helped me increase reusability of the components

## Installing
 - Install node
 - Install react-native-cli
 - Clone reposity
 - Install and use JDK 8 for android
 - Change hardcoded IP with your computer's IP in AppDelegate.m for iOS
 - Run "react-native run-ios" or "react-native run-android"
   - If you are running on real iOS device, you can use xcode to run this application
   - If you are running on a real android device just connect your device before running, if you want to run on simulated android install android studio and then install simulation from SDK Manager
