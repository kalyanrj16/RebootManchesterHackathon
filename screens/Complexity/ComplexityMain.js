import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ComplexityMain = ({ navigation }) => {
  useEffect(() => {
    // Ensure the title is a plain string
    navigation.setOptions({ title: 'Simplify' });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Centered title */}
      <Text style={styles.title}>Simplify Financial Overwhelm</Text>
      {/* Buttons for Mini Scenarios */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SimplifyNewSubscription')}
      >
        <Text style={styles.buttonText}>Help with Decision-Making</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ExplainContractTerms')}
      >
        <Text style={styles.buttonText}>Explore Financial Contracts</Text>
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
    backgroundColor: '#E8F5E9', // Light green background
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%', // Consistent button width
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4CAF50', // Dark green border
  },
  buttonText: {
    color: '#333', // Dark text for contrast
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ComplexityMain;
