import React from 'react';
import { Alert, Pressable, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import InterviewListScreen from '../screens/InterviewListScreen';
import InterviewDetailScreen from '../screens/InterviewDetailScreen';
import SessionScreen from '../screens/SessionScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import AddInterviewScreen from '../screens/AddInterviewScreen';
import BookmarkButton from '../components/BookmarkButton';
import { headerStyle } from '../theme';

const Stack = createNativeStackNavigator();

// NAVIGATOR 3 of 3: Stack (inside the "Practice" tab)
export default function PracticeStack() {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      {/* Header buttons: hamburger (open drawer) on the left, "+" (navigate) on the right */}
      <Stack.Screen
        name="InterviewList"
        component={InterviewListScreen}
        options={({ navigation }) => ({
          title: 'Interviews',
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              hitSlop={10}
              style={{ marginRight: 12 }}
            >
              <Ionicons name="menu" size={26} color="#fff" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('AddInterview')} hitSlop={10}>
              <Ionicons name="add-circle-outline" size={28} color="#fff" />
            </Pressable>
          ),
        })}
      />

      {/* Dynamic header title from route params + bookmark button that updates data */}
      <Stack.Screen
        name="InterviewDetail"
        component={InterviewDetailScreen}
        options={({ route }) => ({
          title: route.params?.interview?.title ?? 'Interview',
          headerRight: () => <BookmarkButton interview={route.params?.interview} />,
        })}
      />

      {/* Header button that shows an Alert */}
      <Stack.Screen
        name="Session"
        component={SessionScreen}
        options={({ route, navigation }) => ({
          title: `Session: ${route.params.interview.title}`,
          headerBackVisible: false,
          headerRight: () => (
            <Pressable
              hitSlop={10}
              onPress={() =>
                Alert.alert('Quit session?', 'Your progress in this session will be lost.', [
                  { text: 'Keep practising', style: 'cancel' },
                  { text: 'Quit', style: 'destructive', onPress: () => navigation.popToTop() },
                ])
              }
            >
              <Text style={{ color: '#fff', fontWeight: '700' }}>Quit</Text>
            </Pressable>
          ),
        })}
      />

      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={({ navigation }) => ({
          title: 'Your Feedback',
          headerBackVisible: false,
          headerRight: () => (
            <Pressable onPress={() => navigation.popToTop()} hitSlop={10}>
              <Text style={{ color: '#fff', fontWeight: '700' }}>Done</Text>
            </Pressable>
          ),
        })}
      />

      <Stack.Screen
        name="AddInterview"
        component={AddInterviewScreen}
        options={{ title: 'New Interview', presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
}
