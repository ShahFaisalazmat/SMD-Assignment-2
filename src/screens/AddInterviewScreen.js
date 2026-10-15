import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useApp } from '../context/AppContext';
import { COLORS } from '../theme';

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export default function AddInterviewScreen({ navigation }) {
  const { addInterview } = useApp();
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [question, setQuestion] = useState('');

  const save = () => {
    if (!title.trim() || !question.trim()) {
      Alert.alert('Missing info', 'Please enter a title and at least one question.');
      return;
    }
    addInterview({
      title: title.trim(),
      level,
      duration: 10,
      description: 'Custom interview created by you.',
      questions: [question.trim()],
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="e.g. Data Analyst" />

      <Text style={styles.label}>Level</Text>
      <View style={styles.levels}>
        {LEVELS.map((l) => (
          <Pressable key={l} onPress={() => setLevel(l)} style={[styles.chip, level === l && styles.chipActive]}>
            <Text style={[styles.chipText, level === l && { color: '#fff' }]}>{l}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>First question</Text>
      <TextInput
        style={[styles.input, { height: 90 }]}
        value={question}
        onChangeText={setQuestion}
        multiline
        placeholder="Type a question"
      />

      <Pressable style={styles.btn} onPress={save}>
        <Text style={styles.btnText}>Save Interview</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, padding: 20 },
  label: { marginTop: 14, marginBottom: 6, fontWeight: '700', color: COLORS.text },
  input: { backgroundColor: '#fff', borderRadius: 10, padding: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  levels: { flexDirection: 'row' },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    marginRight: 8,
  },
  chipActive: { backgroundColor: COLORS.primary },
  chipText: { color: COLORS.text, fontWeight: '600' },
  btn: { marginTop: 28, backgroundColor: COLORS.primary, padding: 15, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
