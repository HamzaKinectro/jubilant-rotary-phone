/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
import { name as appName } from "./app.json";

// AppRegistry.registerComponent(appName, () => App);

import React from "react";
import { Text, AppRegistry } from "react-native";

const App = () => {
  return <Text>My First App</Text>;
};

AppRegistry.registerComponent(appName, () => App);
