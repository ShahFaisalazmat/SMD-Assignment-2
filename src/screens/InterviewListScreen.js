import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import InterviewCard from '../components/InterviewCard';
import { useApp } from '../context/AppContext';
import { COLORS } from '../theme';

export default function InterviewListScreen({ navigation }) {
  const { interviews } = useApp();

  return (
    <View style={styles.container}>
      <FlatList
        data={interviews}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <InterviewCard
            interview={item}
            // PASSING DATA via route params
            onPress={() => navigation.navigate('InterviewDetail', { interview: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: COLORS.bg } });
