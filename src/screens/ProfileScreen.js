import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useApp } from '../context/AppContext';
import { COLORS } from '../theme';

export default function ProfileScreen() {
  const { interviews, savedIds, history } = useApp();
  const avg = history.length ? history.reduce((a, h) => a + h.average, 0) / history.length : 0;

  const Stat = ({ label, value }) => (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>C</Text>
      </View>
      <Text style={styles.name}>Candidate</Text>
      <View style={styles.row}>
        <Stat label="Interviews" value={interviews.length} />
        <Stat label="Saved" value={savedIds.length} />
        <Stat label="Sessions" value={history.length} />
        <Stat label="Avg score" value={history.length ? avg.toFixed(1) : '-'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, alignItems: 'center', paddingTop: 40 },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#fff', fontSize: 36, fontWeight: '800' },
  name: { marginTop: 12, fontSize: 20, fontWeight: '800', color: COLORS.text },
  row: { flexDirection: 'row', marginTop: 28, paddingHorizontal: 12 },
  stat: {
    flex: 1,
    backgroundColor: COLORS.card,
    marginHorizontal: 4,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  statValue: { fontSize: 20, fontWeight: '800', color: COLORS.primary },
  statLabel: { marginTop: 2, fontSize: 11, color: COLORS.muted },
});
