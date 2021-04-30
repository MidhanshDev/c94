import React from "react";
import ReportScreen from "../screens/ReportScreen";
import ActionScreen from "../screens/ActionScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
export const AppTabNavigator = createBottomTabNavigator({
  Action: {
    screen: ActionScreen,
    navigationOptions: {
      tabBarLabel: "Action List",
    },
  },
  Report: {
    screen: ReportScreen,
    navigationOptions: {
      tabBarLabel: "Report Issue",
    },
  },
});
