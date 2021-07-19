import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutPage from '../pages/AboutPage';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage';
import NotificationsPage from '../pages/NotificationsPage';


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home1" component={AppTabs} />
      <Drawer.Screen name="Notifications" component={NotificationsPage} />
    </Drawer.Navigator>
  );
}

const AppTabs = () => {
  return (
    <Tabs.Navigator >
      <Tabs.Screen name="HomeTab" component={HomePage} />
      <Tabs.Screen name="Settings" component={SettingsPage} />
    </Tabs.Navigator>
  );
}


const AppRoutes = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Detail" component={DetailPage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="Home" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>


  )
}


export default AppRoutes