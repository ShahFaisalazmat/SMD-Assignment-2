import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { COLORS } from '../theme';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Rehersa Practice</Text>
      <Text style={styles.body}>
        A small mock-interview practice app built for the React Navigation assignment. It is a
        simplified companion to the Rehersa final year project (AI interview and candidate
        evaluation platform).
      </Text>
      <Text style={styles.body}>
        Pick an interview, read the questions, run a practice session, rate your confidence and get
        feedback. Bookmark interviews and review your history from the drawer.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  title: { fontSize: 24, fontWeight: '800', color: COLORS.text, marginBottom: 12 },
  body: { fontSize: 15, lineHeight: 22, color: COLORS.text, marginBottom: 12 },
});
