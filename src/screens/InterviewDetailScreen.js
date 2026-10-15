import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme';

export default function InterviewDetailScreen({ route, navigation }) {
  // RECEIVING route params
  const { interview } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>{interview.title}</Text>
      <Text style={styles.meta}>
        Level: {interview.level} · Duration: {interview.duration} min
      </Text>
      <Text style={styles.desc}>{interview.description}</Text>

      <Text style={styles.section}>Questions ({interview.questions.length})</Text>
      {interview.questions.map((q, i) => (
        <View key={i} style={styles.qRow}>
          <Text style={styles.qNum}>{i + 1}</Text>
          <Text style={styles.qText}>{q}</Text>
        </View>
      ))}

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('Session', { interview })}
      >
        <Text style={styles.btnText}>Start Practice Session</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  title: { fontSize: 24, fontWeight: '800', color: COLORS.text },
  meta: { marginTop: 6, color: COLORS.muted },
  desc: { marginTop: 14, fontSize: 15, color: COLORS.text, lineHeight: 22 },
  section: { marginTop: 24, marginBottom: 8, fontSize: 17, fontWeight: '700', color: COLORS.text },
  qRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  qNum: { fontWeight: '800', color: COLORS.primary, marginRight: 10 },
  qText: { flex: 1, color: COLORS.text },
  btn: {
    marginTop: 24,
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
