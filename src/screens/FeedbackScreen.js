import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme';

export default function FeedbackScreen({ route }) {
  // RECEIVING route params from the Session screen
  const { interviewTitle, average, ratings, questions } = route.params;
  const verdict =
    average >= 4 ? 'Excellent, you are interview-ready!' : average >= 3 ? 'Good, keep practising.' : 'Needs more practice.';
  const color = average >= 4 ? COLORS.success : average >= 3 ? COLORS.warn : COLORS.danger;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.heading}>{interviewTitle}</Text>
      <View style={[styles.scoreBox, { borderColor: color }]}>
        <Text style={[styles.score, { color }]}>{average.toFixed(1)} / 5</Text>
        <Text style={styles.verdict}>{verdict}</Text>
      </View>
      <Text style={styles.section}>Per question</Text>
      {questions.map((q, i) => (
        <View key={i} style={styles.row}>
          <Text style={styles.q}>{q}</Text>
          <Text style={styles.r}>{ratings[i]}/5</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  heading: { fontSize: 20, fontWeight: '800', color: COLORS.text },
  scoreBox: {
    marginTop: 16,
    padding: 24,
    borderRadius: 16,
    borderWidth: 2,
    backgroundColor: COLORS.card,
    alignItems: 'center',
  },
  score: { fontSize: 40, fontWeight: '800' },
  verdict: { marginTop: 6, color: COLORS.text, fontSize: 15 },
  section: { marginTop: 24, marginBottom: 8, fontWeight: '700', fontSize: 16, color: COLORS.text },
  row: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    alignItems: 'center',
  },
  q: { flex: 1, color: COLORS.text },
  r: { marginLeft: 10, fontWeight: '700', color: COLORS.primary },
});
