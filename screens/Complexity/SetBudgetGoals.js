import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SetBudgetGoals() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Pre-Transaction Alert screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  text: { fontSize: 18, color: '#333' },
});
