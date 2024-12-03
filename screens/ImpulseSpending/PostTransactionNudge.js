import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';

const PostTransactionNudge = ({ navigation }) => {
  const [pastNudges, setPastNudges] = useState([
    { id: '1', message: '£50 spent on dining last week.' },
    { id: '2', message: '£100 spent on shopping two days ago.' },
    { id: '3', message: '£30 spent on entertainment yesterday.' },
  ]);
  const [currentNudge, setCurrentNudge] = useState({
    id: '4',
    message: "You've spent £20 on Uber Eats. Consider saving for your upcoming Credit Card payment.",
  });
  const [simulationMessageVisible, setSimulationMessageVisible] = useState(false);

  const handleDismiss = () => {
    setSimulationMessageVisible(true); // Show simulation message modal
  };

  const handleSimulationClose = () => {
    setPastNudges((prevNudges) => [currentNudge, ...prevNudges]);
    setCurrentNudge(null);
    setSimulationMessageVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Past Nudges in Background */}
      <FlatList
        data={pastNudges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.pastNudge}
            onPress={() =>
              navigation.navigate('NudgeDetails', {
                nudge: { ...item, date: 'Yesterday', category: 'Dining', recommendation: 'Limit spending on dining to prioritize savings.' },
              })
            }
          >
            <Text style={styles.pastNudgeText}>{item.message}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={<Text style={styles.headerText}>Past Nudges</Text>}
        contentContainerStyle={styles.pastNudgeList}
      />

      {/* Current Nudge in Foreground */}
      {currentNudge && (
        <View style={styles.nudgeContainer}>
          <Text style={styles.nudgeText}>{currentNudge.message}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.dismissButton} onPress={handleDismiss}>
              <Text style={styles.buttonText}>Dismiss</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.learnMoreButton}
              onPress={() => navigation.navigate('ReminderList')}
            >
              <Text style={styles.buttonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Simulation Message Modal */}
      <Modal visible={simulationMessageVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalMessage}>
              "This is a simulation. In real usage, the payment would process, and you'd return to this screen."
            </Text>
            <TouchableOpacity style={styles.dismissButton} onPress={handleSimulationClose}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  pastNudgeList: {
    marginTop: 10,
  },
  pastNudge: {
    backgroundColor: '#D3D3D3', // Grey color for past nudges
    padding: 15, // Increased padding for larger nudge boxes
    borderRadius: 10,
    marginBottom: 10,
  },
  pastNudgeText: {
    color: '#333',
    fontSize: 16, // Increased font size for better visibility
    fontWeight: '500',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  nudgeContainer: {
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
  nudgeText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dismissButton: {
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  learnMoreButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default PostTransactionNudge;
