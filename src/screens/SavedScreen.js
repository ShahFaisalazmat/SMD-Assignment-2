import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import InterviewCard from '../components/InterviewCard';
import { useApp } from '../context/AppContext';
import { COLORS } from '../theme';

export default function SavedScreen({ navigation }) {
  const { interviews, savedIds } = useApp();
  const saved = interviews.filter((i) => savedIds.includes(i.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={saved}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, flexGrow: 1 }}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No saved interviews yet.</Text>
            <Text style={styles.emptyHint}>Tap the bookmark icon in an interview's header to save it.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <InterviewCard
            interview={item}
            // Cross-navigator navigation: Tab -> Practice tab -> nested Stack screen, with params
            onPress={() =>
              navigation.navigate('Practice', {
                screen: 'InterviewDetail',
                params: { interview: item },
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  emptyText: { fontSize: 17, fontWeight: '700', color: COLORS.text },
  emptyHint: { marginTop: 6, color: COLORS.muted, textAlign: 'center' },
});
