import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';

const ReminderList = ({ navigation }) => {
  // Sample data for reminders
  const initialReminders = [
    { id: '1', title: 'Pay Electricity Bill', dueDate: 'Today', priority: 'High', status: 'Pending', message: 'You paid £100 for electricity and avoided a late fee of £10.' },
    { id: '2', title: 'Renew Car Insurance', dueDate: 'In 2 Days', priority: 'Medium', status: 'Pending', message: 'You renewed your car insurance early and earned a £5 discount.' },
    { id: '3', title: 'Check Netflix Subscription', dueDate: 'In 5 Days', priority: 'Low', status: 'Pending', message: 'You reviewed your Netflix subscription. Consider downgrading to save £5/month.' },
    { id: '4', title: 'Pay Council Tax', dueDate: 'In one week', priority: 'Medium', status: 'Completed', message: 'You paid your Council Tax on time, avoiding any penalties or reminders.' },
  ];

  const [reminders, setReminders] = useState(initialReminders);
  const [completedReminders, setCompletedReminders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentReminder, setCurrentReminder] = useState(null);

  const handleMarkAsDone = (reminder) => {
    setCurrentReminder(reminder);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);

    // Add a 1-second delay before updating the queue
    setTimeout(() => {
      setReminders((prev) => prev.filter((item) => item.id !== currentReminder.id));
      setCompletedReminders((prev) => [...prev, currentReminder]);
    }, 1000); // 1000ms = 1 second
  };

  // Highlight the top-priority reminder
  const topReminder = reminders[0];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Focus for Now</Text>
        {topReminder && (
          <View style={[styles.focusCard, styles[`priority${topReminder.priority}`]]}>
            <Text style={styles.reminderTitle}>{topReminder.title}</Text>
            <Text style={styles.reminderDetails}>Due: {topReminder.dueDate} | Priority: {topReminder.priority}</Text>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => handleMarkAsDone(topReminder)}
            >
              <Text style={styles.doneButtonText}>Mark as Done</Text>
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.tagline}>
          "Your reminders are already prioritized—focus on one at a time."
        </Text>
      </View>

      <View style={styles.listSection}>
        <Text style={styles.sectionTitle}>Upcoming Tasks</Text>
        <FlatList
          data={reminders.slice(1)} // Skip the top reminder
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.reminderCard, styles[`priority${item.priority}`]]}>
              <Text style={styles.reminderTitle}>{item.title}</Text>
              <Text style={styles.reminderDetails}>Due: {item.dueDate} | Priority: {item.priority}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.listSection}>
        <Text style={styles.sectionTitle}>Completed Tasks</Text>
        <FlatList
          data={completedReminders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.completedCard}>
              <Text style={styles.reminderTitle}>{item.title}</Text>
              <Text style={styles.reminderDetails}>{item.dueDate}</Text>
            </View>
          )}
        />
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalMessage}>{currentReminder?.message}</Text>
            <TouchableOpacity style={styles.doneButton} onPress={handleModalClose}>
              <Text style={styles.doneButtonText}>OK</Text>
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
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
    fontStyle: 'italic',
  },
  focusCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
    backgroundColor: '#FFF8DC',
  },
  priorityHigh: {
    borderColor: '#FF4500', // Dark Amber
  },
  priorityMedium: {
    borderColor: '#FFD700', // Amber
  },
  priorityLow: {
    borderColor: '#1E90FF', // Blue
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  reminderDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  doneButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  listSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  reminderCard: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  completedCard: {
    padding: 15,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: 10,
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

export default ReminderList;
