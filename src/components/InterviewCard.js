import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme';

export default function InterviewCard({ interview, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && { opacity: 0.85 }]}>
      <Text style={styles.title}>{interview.title}</Text>
      <Text style={styles.meta}>
        {interview.level} · {interview.duration} min · {interview.questions.length} questions
      </Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{interview.level}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 17, fontWeight: '700', color: COLORS.text },
  meta: { marginTop: 4, color: COLORS.muted },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 10,
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  badgeText: { color: COLORS.primaryDark, fontSize: 12, fontWeight: '600' },
});
