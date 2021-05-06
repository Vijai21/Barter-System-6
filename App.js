import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppTabNavigator} from './AppTabNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './components/CustomSideBarMenu';
import SettingScreen from './screens/SettingScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}
const AppDrawerNavigator = createDrawerNavigator({
  Home: {screen: AppTabNavigator},
  Settings: {screen: SettingScreen}
},
{contentComponent: CustomSideBarMenu},
{initialRouteName: 'Home'})

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  AppDrawerNavigator: AppDrawerNavigator
})

const AppContainer = createAppContainer(SwitchNavigator)