import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NudgeDetails({ route, navigation }) {
  const { nudge } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nudge Details</Text>
      <View style={styles.detailCard}>
        <Text style={styles.detailLabel}>Message:</Text>
        <Text style={styles.detailValue}>{nudge.message}</Text>
        <Text style={styles.detailLabel}>Transaction Date:</Text>
        <Text style={styles.detailValue}>{nudge.date || 'Unknown'}</Text>
        <Text style={styles.detailLabel}>Category:</Text>
        <Text style={styles.detailValue}>{nudge.category || 'Miscellaneous'}</Text>
        <Text style={styles.detailLabel}>Recommendation:</Text>
        <Text style={styles.detailValue}>
          {nudge.recommendation || 'Consider prioritizing high-priority payments before discretionary expenses.'}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  detailCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    width: '90%',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  detailValue: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007F3B',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
