## A simple React Native counter app to test Hermes Performance
### How to run: 
- Android: react-native run-android
- iOS: react-native run-ios
### How to start Hermes sampling profile:
- Open Developer Menu with Cmd+M or Shake the device. Select `Enable Sample Profiler`
- Execute JavaScript by pressing buttons, etc.
- From Developer Menu, select `Disable Sample Profiler`. 
- Pull the sample profile: `adb pull /data/user/0/com.appName/cache/*.cpuprofile`
