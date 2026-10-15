import React from 'react';
import { Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeTabs from './HomeTabs';
import HistoryScreen from '../screens/HistoryScreen';
import AboutScreen from '../screens/AboutScreen';
import { COLORS, headerStyle } from '../theme';

const Drawer = createDrawerNavigator();

// NAVIGATOR 1 of 3: Drawer (root)
export default function RootDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...headerStyle,
        drawerActiveTintColor: COLORS.primary,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeTabs}
        options={{
          headerShown: false, // the nested Tabs/Stack draw their own headers
          title: 'Home',
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: 'Practice History',
          drawerIcon: ({ color, size }) => <Ionicons name="time-outline" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About Rehersa',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
