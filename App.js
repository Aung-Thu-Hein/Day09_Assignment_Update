
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../AungThuHein_Day09Assignment_6-10-2022/components/Home';
import Favourite from '../AungThuHein_Day09Assignment_6-10-2022/components/Favourite';
import Register from '../AungThuHein_Day09Assignment_6-10-2022/components/Register';

const BSE = () => <Text> BSE </Text>
const Reg = () => <Register/>

const Manager = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'blue' }}> This is Manager....</Text>
    </View>
  )
}

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'blue' }}> This is Screen Details....</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();
const StackScreen = () => {
  return(
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home}></Stack.Screen>
    <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
  </Stack.Navigator>
  )
}


const Tab = createBottomTabNavigator();
const TabBar = () => {
  return(
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="All">
    <Tab.Screen name="All" component={StackScreen}></Tab.Screen>
    <Tab.Screen name="Manager" component={Manager}></Tab.Screen>
    <Tab.Screen name="BSE" component={BSE}></Tab.Screen>
    <Tab.Screen name="Register" component={Reg}></Tab.Screen>
  </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // title: 'Contact List'
        }}>
        <Drawer.Screen name="Home" component={TabBar}></Drawer.Screen>
        <Drawer.Screen name="Favourite" component={Favourite}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerScreen;

