# React Native Training

## 19th to 23rd Dec 2022

### Create a new app using Expo CLI

1. Install the expo cli
    - `npm i -g expo-cli`
1. Create a new app
    - `expo init rn-basics`
1. Run the app
    - `npm start` or `expo start`
    - Follow the instructions there by

### Alternately, without installing expo-cli,

1. `npx create-expo-app --template blank hello-rn-app`
1. `npx create-expo-app --template` interactive

### Notes:

1. Component names must start with Upper case

Each of the core react native components will be compiled into device's native components.

1. View --> ViewGroup (android), UIView (ios), div (web)
1. Text --> TextView (android), UITextView (ios), p (web)
1. TextInput --> EditText (android), UITextField (ios), &lt;input type='text'> (web)
1. Image --> ImageView (android), UIImageView (ios), &lt;img src=...> (web)

JS inside your components will be shipped and interpreted using a JS engine.

### To work with React Navigation App

-   create a new react native project using expo
    -   npx create-expo-app --template
-   cd into your project folder
    -   cd rn-movie-browser
-   install the following dependencies
    -   npm install @react-navigation/native
    -   npx expo install react-native-screens react-native-safe-area-context
    -   npm install @react-navigation/native-stack
