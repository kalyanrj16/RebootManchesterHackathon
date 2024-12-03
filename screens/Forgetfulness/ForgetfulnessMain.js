import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ForgetfulnessMain = ({ navigation }) => {
  // Set the navigation title dynamically
  useEffect(() => {
    navigation.setOptions({ title: 'Mindful Actions' }); // Top title
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Centralized Title */}
      <Text style={styles.title}>Know Your Actionable Items</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ReminderList')}
      >
        <Text style={styles.buttonText}>Dynamic Queue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MicroRewardSummary')}
      >
        <Text style={styles.buttonText}>Micro Rewards</Text>
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

export default ForgetfulnessMain;
