import { AppRegistry } from "react-native";
import React, { Component } from "react";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

import store from "./store";

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => index);

