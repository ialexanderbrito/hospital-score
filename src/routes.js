import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './pages/Home';
import Aba2Screen from './pages/Aba2';
import Aba3Screen from './pages/Aba3';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: MaterialCommunityIcons,
    name: 'home-outline',
  },
  Aba2: {
    lib: MaterialCommunityIcons,
    name: 'tab',
  },
  Aba3: {
    lib: MaterialCommunityIcons,
    name: 'tab',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#ebebeb',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#1b1b1b',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen
        name="Aba2"
        component={Aba2Screen}
        options={{ title: 'Aba2' }}
      />

      <Tab.Screen
        name="Aba3"
        component={Aba3Screen}
        options={{ title: 'Aba3' }}
      />
    </Tab.Navigator>
  );
}
