import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const SubscriptionPrompt = ({ navigation }) => {
  const [currentPrompt, setCurrentPrompt] = useState({
    message: "You're about to subscribe to Netflix Premium (£15/month). Learn how subscriptions impact your budget.",
  });

  const [pastPrompts, setPastPrompts] = useState([
    { id: '1', message: 'Subscribed to Spotify (£10/month) on 15-Oct-2024.', date: '15-Oct-2024', category: 'Entertainment' },
    { id: '2', message: 'Subscribed to Amazon Prime (£8/month) on 12-Sep-2024.', date: '12-Sep-2024', category: 'Entertainment' },
    { id: '3', message: 'Subscribed to British Gas (£30/month) on 01-Jan-2024.', date: '01-Jan-2024', category: 'Utilities' },
  ]);

  const handleLearnMore = () => {
    navigation.navigate('ExplainContractTerms');
  };

  const handleProceed = () => {
    setPastPrompts((prevPrompts) => [currentPrompt, ...prevPrompts]);
    setCurrentPrompt(null);
  };

  const renderPastPrompts = ({ item }) => (
    <TouchableOpacity
      style={styles.pastPrompt}
      onPress={() =>
        navigation.navigate('NudgeDetails', {
          nudge: { message: item.message, date: item.date, category: item.category },
        })
      }
    >
      <Text style={styles.pastPromptText}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Past Prompts */}
      <FlatList
        data={pastPrompts}
        keyExtractor={(item) => item.id}
        renderItem={renderPastPrompts}
        ListHeaderComponent={<Text style={styles.headerText}>Past Prompts</Text>}
        contentContainerStyle={styles.pastPromptList}
      />

      {/* Current Prompt */}
      {currentPrompt && (
        <View style={styles.promptContainer}>
          <Text style={styles.promptText}>{currentPrompt.message}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.learnMoreButton} onPress={handleLearnMore}>
              <Text style={styles.buttonText}>Learn More</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  pastPromptList: {
    marginTop: 10,
  },
  pastPrompt: {
    backgroundColor: '#D3D3D3', // Grey color for past prompts
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  pastPromptText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  promptContainer: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  promptText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  learnMoreButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  proceedButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default SubscriptionPrompt;
