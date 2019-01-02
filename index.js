/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';

// AppRegistry.registerComponent(appName, () => App);

import React from "react";
import { Text, AppRegistry, View } from "react-native";
import { name as appName } from "./app.json";
import Header from "./app/src/components/header";
import AlbumList from "./app/src/components/Albumlist";
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Albums!" />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent(appName, () => App);
