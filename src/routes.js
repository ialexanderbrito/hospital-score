import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './pages/Home';
import SearchScreen from './pages/Search';
import EvalutionScreen from './pages/Evalution';
import SettingsScreen from './pages/Settings';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: MaterialCommunityIcons,
    name: 'home-outline',
  },
  Search: {
    lib: MaterialIcons,
    name: 'search',
  },
  Evalution: {
    lib: MaterialCommunityIcons,
    name: 'star-outline',
  },
  Settings: {
    lib: MaterialCommunityIcons,
    name: 'settings-outline',
  },
};

export default function Routes() {
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
          borderTopColor: 'rgba(255,255,255,0.1)',
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
        name="Search"
        component={SearchScreen}
        options={{ title: 'Buscar' }}
      />

      <Tab.Screen
        name="Evalution"
        component={EvalutionScreen}
        options={{ title: 'Avaliar' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Ajustes' }}
      />
    </Tab.Navigator>
  );
}
