import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useApp } from '../context/AppContext';
import { COLORS } from '../theme';

export default function HistoryScreen() {
  const { history } = useApp();

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, flexGrow: 1 }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No sessions yet.</Text>
            <Text style={styles.emptyHint}>Complete a practice session to see it here.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.score}>{item.average.toFixed(1)}/5</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  title: { fontWeight: '700', color: COLORS.text },
  date: { marginTop: 3, color: COLORS.muted, fontSize: 12 },
  score: { fontSize: 18, fontWeight: '800', color: COLORS.primary },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { fontSize: 17, fontWeight: '700', color: COLORS.text },
  emptyHint: { marginTop: 6, color: COLORS.muted },
});
