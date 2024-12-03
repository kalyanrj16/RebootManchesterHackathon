import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TAP2</Text>
      <Text style={styles.subtitle}>
        A system designed to Reflect, Remind, and Learn with empathy.
      </Text>

      {/* Reflect Module */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ImpulseSpendingMain')}
      >
        <Text style={styles.buttonText}>Reflect</Text>
        <Text style={styles.tagline}>
          Understand your spending patterns and make mindful decisions.
        </Text>
      </TouchableOpacity>

      {/* Remind Module */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ForgetfulnessMain')}
      >
        <Text style={styles.buttonText}>Remind</Text>
        <Text style={styles.tagline}>
          Stay on top of your priorities with ease and clarity.
        </Text>
      </TouchableOpacity>

      {/* Learn Module */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ComplexityMain')}
      >
        <Text style={styles.buttonText}>Learn</Text>
        <Text style={styles.tagline}>
          Simplify complex financial concepts and grow your knowledge.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007F3B',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tagline: {
    color: '#fff',
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 5,
    textAlign: 'center',
  },
});
