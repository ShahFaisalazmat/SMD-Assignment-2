import React from 'react';
import { Alert, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';

// Header button: toggles the bookmark state (updates shared data) and shows an alert.
export default function BookmarkButton({ interview }) {
  const { savedIds, toggleSaved } = useApp();
  if (!interview) return null;
  const saved = savedIds.includes(interview.id);

  return (
    <Pressable
      hitSlop={10}
      onPress={() => {
        toggleSaved(interview.id);
        Alert.alert(saved ? 'Removed' : 'Saved', saved ? 'Removed from Saved.' : 'Added to Saved Interviews.');
      }}
    >
      <Ionicons name={saved ? 'bookmark' : 'bookmark-outline'} size={24} color="#fff" />
    </Pressable>
  );
}
