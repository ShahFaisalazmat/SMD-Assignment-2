import React from 'react';
import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import PracticeStack from './PracticeStack';
import SavedScreen from '../screens/SavedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { COLORS, headerStyle } from '../theme';

const Tab = createBottomTabNavigator();

// NAVIGATOR 2 of 3: Bottom Tabs (inside the Drawer's "Home" screen)
export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        ...headerStyle,
        tabBarActiveTintColor: COLORS.primary,
        // Header button: opens the drawer (dispatch bubbles up to the parent Drawer)
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginLeft: 14 }}
            hitSlop={10}
          >
            <Ionicons name="menu" size={26} color="#fff" />
          </Pressable>
        ),
      })}
    >
      <Tab.Screen
        name="Practice"
        component={PracticeStack}
        options={{
          headerShown: false, // the Stack has its own header
          tabBarIcon: ({ color, size }) => <Ionicons name="mic-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          title: 'Saved Interviews',
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, size }) => <Ionicons name="bookmark-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
