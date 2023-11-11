import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Abl from "./MCB/Abl";
import Mcb from "./MCB/Mcb";
import Ubl from "./MCB/Ubl";

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ABL') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'UBL') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'MCB') {
              iconName = focused ? 'ios-business' : 'ios-business-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="UBL" component={Mcb}/>
        <Tab.Screen name="ABL" component={Abl}/>
        <Tab.Screen name="MCB" component={Ubl} />
  
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
