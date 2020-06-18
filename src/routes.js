import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './pages/Home';
import DetailScreen from './pages/Detail';

import SearchScreen from './pages/Search';
import RatingsScreen from './pages/Ratings';
import SettingsScreen from './pages/Settings';

const icons = {
  Home: {
    lib: MaterialCommunityIcons,
    name: 'home-outline',
  },
  Search: {
    lib: MaterialIcons,
    name: 'search',
  },
  Ratings: {
    lib: MaterialCommunityIcons,
    name: 'star-outline',
  },
  Settings: {
    lib: MaterialCommunityIcons,
    name: 'settings-outline',
  },
};

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

const RatingsStack = createStackNavigator();

function RatingsStackScreen() {
  return (
    <RatingsStack.Navigator headerMode="none">
      <RatingsStack.Screen name="Ratings" component={RatingsScreen} />
    </RatingsStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const DetailStack = createStackNavigator();

function DetailStackScreen() {
  return (
    <DetailStack.Navigator headerMode="none">
      <DetailStack.Screen name="Detail" component={DetailScreen} />
    </DetailStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
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
          backgroundColor: '#f0f0f5',
          borderTopColor: 'rgba(255,255,255,0.2)',
        },
        activeTintColor: '#e02041',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{ title: 'Pesquisar' }}
      />
      <Tab.Screen
        name="Ratings"
        component={RatingsStackScreen}
        options={{ title: 'Avaliar' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{ title: 'Ajustes' }}
      />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Home" component={HomeTabs} />
        <RootStack.Screen name="Detail" component={DetailStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
