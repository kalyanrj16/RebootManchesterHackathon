import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const PreTransactionAlert = ({ navigation }) => {
  const [currentAlert, setCurrentAlert] = useState({
    id: '0',
    message: "You've already spent £50 on dining out this week. By skipping this transaction, you can save £20!",
  });

  const [pastAlerts, setPastAlerts] = useState([
    { id: '1', message: 'Spent £15 at Starbucks on 30-Nov-2024.', date: '30-Nov-2024', category: 'Dining' },
    { id: '2', message: 'Spent £25 at McDonald’s on 28-Nov-2024.', date: '28-Nov-2024', category: 'Dining' },
    { id: '3', message: 'Spent £35 on Uber Eats on 27-Nov-2024.', date: '27-Nov-2024', category: 'Dining' },
  ]);

  const handleSkip = () => {
    setCurrentAlert(null); // Hide the current alert
    navigation.navigate('MicroRewardSummary'); // Navigate to Micro Reward Summary
  };

  const handleProceed = () => {
    if (currentAlert) {
      setPastAlerts((prevAlerts) => [{ id: currentAlert.id, message: currentAlert.message }, ...prevAlerts]);
    }
    setCurrentAlert(null);
  };

  const renderPastAlerts = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={styles.pastAlert}
      onPress={() =>
        navigation.navigate('NudgeDetails', {
          nudge: { message: item.message, date: item.date, category: item.category },
        })
      }
    >
      <Text style={styles.pastAlertText}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Past Alerts */}
      <FlatList
        data={pastAlerts}
        keyExtractor={(item) => item.id}
        renderItem={renderPastAlerts}
        ListHeaderComponent={<Text style={styles.headerText}>Past Alerts</Text>}
        contentContainerStyle={styles.pastAlertList}
      />

      {/* Current Alert */}
      {currentAlert && (
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>{currentAlert.message}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.buttonText}>Skip</Text>
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
  pastAlertList: {
    marginTop: 10,
  },
  pastAlert: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  pastAlertText: {
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
  alertContainer: {
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
  alertText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipButton: {
    backgroundColor: '#4CAF50', // Green
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  proceedButton: {
    backgroundColor: '#FF6347', // Red
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

export default PreTransactionAlert;
