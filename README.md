# Covid-19

Covid-19 tracker

Steps for Installation or creation of new App for the first time.
Commands:
react-native init <<project-name>>
react-native start
react-native run-android

#commands for building APK

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
cd android
gradlew assembleRelease -x bundleReleaseJsAndAssets
