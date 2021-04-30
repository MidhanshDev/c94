import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";
import SettingScreen from "../screens/SettingScreen";
import NotificationScreen from "../screens/NotificationScreen";
import { Icon } from "react-native-elements";
export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
      navigationOptions: {
        drawerIcon: <Icon name="home" type="fontawesome5" />,
      },
    },
    
    Notifications: { screen: NotificationScreen,
      navigationOptions: {
        drawerIcon: <Icon name="bell" type="font-awesome" />,
        drawerLabel:"Notifications"
      },
    },
    
    Settings: { screen: SettingScreen,
      navigationOptions: {
        drawerIcon: <Icon name="settings" type="Ionicons" />,
        drawerLabel:"Settings"
      },
    },
  },
  { contentComponent: CustomSideBarMenu },
  { initialRouteName: "Home" }
);
