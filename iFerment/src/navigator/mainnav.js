import React from "react";
import { createStackNavigator } from "react-navigation";

function shouldInvert(index, routes) {
  if (routes.length > 1) {
    routes.forEach(route => {
      if (route.routeName == "Profile") {
        return true;
      } else {
        return false;
      }
    });
  }
  return false;
}

const Main = createStackNavigator(
  {
    //Screens
  },
  {
    headerMode: "screen",
    navigationOptions: {
      header: null
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const width = layout.initWidth;

        invert = shouldInvert(index, sceneProps.navigation.state.routes);
        console.log(invert);
        if (invert)
          return {
            opacity: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, 1, 0]
            }),
            transform: [
              {
                translateX: position.interpolate({
                  inputRange: [index - 1, index + 1],
                  outputRange: [-width, width]
                })
              }
            ]
          };
        return {
          opacity: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 1, 0]
          }),
          transform: [
            {
              translateX: position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, -width]
              })
            }
          ]
        };
      }
    })
  }
);

export default (Nav = () => {
  return <Main />;
});
