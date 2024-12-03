import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';

const MicroRewardSummary = ({ navigation }) => {
  // Rewards Data
  const rewards = [
    {
      id: '1',
      title: 'Skipped Uber Eats',
      amount: '£20',
      details: 'You skipped Uber Eats and saved £20 this week!',
    },
    {
      id: '2',
      title: 'Avoided Late Fee on Water Bill',
      amount: '£5',
      details: 'You avoided a £5 late fee on your water bill by acting early.',
    },
    {
      id: '3',
      title: 'Canceled Unused Gym Subscription',
      amount: '£10',
      details: 'You saved £10 by reviewing and canceling your unused gym subscription.',
    },
    {
      id: '4',
      title: 'Refinanced Credit Card Debt',
      amount: '£15',
      details: 'You saved £15 in interest by refinancing your credit card debt.',
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [currentReward, setCurrentReward] = useState(null);

  const handleRewardClick = (reward) => {
    setCurrentReward(reward);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // Calculate Total Savings
  const totalSavings = rewards.reduce((sum, reward) => sum + parseFloat(reward.amount.substring(1)), 0);

  return (
    <View style={styles.container}>
      {/* Total Savings Badge */}
      <View style={styles.totalSavingsContainer}>
        <Text style={styles.totalSavingsTitle}>Total Savings</Text>
        <View style={styles.savingsBadge}>
          <Text style={styles.savingsAmount}>{`£${totalSavings}`}</Text>
        </View>
        <Text style={styles.savingsTagline}>
          "Small actions, big savings! Here's what your mindful decisions have earned."
        </Text>
      </View>

      {/* Rewards List */}
      <FlatList
        data={rewards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.rewardCard} onPress={() => handleRewardClick(item)}>
            <Text style={styles.rewardTitle}>{item.title}</Text>
            <Text style={styles.rewardAmount}>{item.amount}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={<Text style={styles.listHeader}>Your Micro Rewards</Text>}
      />

      {/* Reward Details Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{currentReward?.title}</Text>
            <Text style={styles.modalDetails}>{currentReward?.details}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
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
  totalSavingsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  totalSavingsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  savingsBadge: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  savingsAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  savingsTagline: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 5,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  rewardCard: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  rewardTitle: {
    fontSize: 16,
    color: '#333',
  },
  rewardAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 5,
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
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  modalDetails: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default MicroRewardSummary;
