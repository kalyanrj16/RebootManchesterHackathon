import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ImpulseSpendingMain = ({ navigation }) => {
  // Set the navigation title dynamically
  useEffect(() => {
    navigation.setOptions({ title: 'Know Your Spending Patterns' }); // Top title
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spending Nudges and Insights</Text> {/* Centered Title */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PostTransactionNudge')}
      >
        <Text style={styles.buttonText}>Post-Nudge Advice</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PreTransactionAlert')}
      >
        <Text style={styles.buttonText}>Pre-Nudge Alert</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SubscriptionPrompt')}
      >
        <Text style={styles.buttonText}>Know More Before You Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#E8F5E9', // Light green for background
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4CAF50', // Dark green border
  },
  buttonText: {
    color: '#333', // Dark text for better readability
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImpulseSpendingMain;
