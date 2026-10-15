import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useApp } from '../context/AppContext';
import { COLORS } from '../theme';

export default function SessionScreen({ route, navigation }) {
  const { interview } = route.params;
  const { addResult } = useApp();
  const [index, setIndex] = useState(0);
  const [ratings, setRatings] = useState([]);

  const rate = (value) => {
    const next = [...ratings, value];
    if (index + 1 < interview.questions.length) {
      setRatings(next);
      setIndex(index + 1);
      return;
    }
    const average = next.reduce((a, b) => a + b, 0) / next.length;
    addResult({ title: interview.title, average, total: next.length });
    // replace() so Back from Feedback doesn't return into a finished session
    navigation.replace('Feedback', {
      interviewTitle: interview.title,
      average,
      ratings: next,
      questions: interview.questions,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Question {index + 1} of {interview.questions.length}
      </Text>
      <View style={styles.card}>
        <Text style={styles.question}>{interview.questions[index]}</Text>
      </View>
      <Text style={styles.prompt}>Answer out loud, then rate how confident you felt:</Text>
      <View style={styles.row}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Pressable key={n} style={styles.rateBtn} onPress={() => rate(n)}>
            <Text style={styles.rateText}>{n}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, padding: 20 },
  progress: { color: COLORS.muted, fontWeight: '600', marginBottom: 12 },
  card: { backgroundColor: COLORS.card, borderRadius: 16, padding: 24, minHeight: 160, justifyContent: 'center' },
  question: { fontSize: 20, fontWeight: '700', color: COLORS.text, lineHeight: 28 },
  prompt: { marginTop: 28, color: COLORS.text },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 },
  rateBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateText: { color: '#fff', fontSize: 20, fontWeight: '800' },
});
