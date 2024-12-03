import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';

const SimplifyNewSubscription = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  const prompts = [
    { id: 1, text: "Why is this subscription redundant?", response: "Disney+ Hotstar overlaps with your current subscriptions (Netflix and Prime Video). These platforms already offer similar genres of content like regional movies and exclusive originals." },
    { id: 2, text: "What alternative options do I have?", response: "Instead of subscribing to Disney+ Hotstar, explore on-demand rentals for regional movies or catch live sports on shared platforms occasionally." },
    { id: 3, text: "Can I revisit my subscription priorities?", response: "Yes, revisit your subscription list and evaluate usage frequency. Unused subscriptions like Gym memberships might be better candidates for cancellation." },
    { id: 4, text: "Tell me more about savings!", response: "By skipping Disney+ Hotstar, you save £12/month. This adds up to £144 annually, which can be redirected to other essential expenses or savings." },
  ];

  const handlePromptClick = (prompt) => {
    setSelectedPrompt(prompt);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPrompt(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Disney+ Hotstar Recommendation</Text>

      {/* Existing Subscriptions Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Your Existing Subscriptions</Text>
        <Text style={styles.text}>Netflix: £10/month, 4K Streaming</Text>
        <Text style={styles.text}>Prime Video: £8/month, Includes Shipping Benefits</Text>
        <Text style={styles.text}>
          Observed Usage: Frequent movie streaming, overlap in regional content
        </Text>
      </View>

      {/* Disney+ Hotstar Features */}
      <View style={styles.section}>
        <Text style={styles.header}>What Disney+ Hotstar Offers</Text>
        <Text style={styles.text}>Exclusive Originals: Marvel, Star Wars</Text>
        <Text style={styles.text}>Live Sports: Cricket, Premier League</Text>
        <Text style={styles.text}>Regional Movies: Tamil, Telugu, Bengali</Text>
        <Text style={styles.text}>Monthly Cost: £12</Text>
      </View>

      {/* Recommendation Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Our Recommendation</Text>
        <Text style={styles.text}>
          Adding Disney+ Hotstar might increase redundancy. Existing platforms like Netflix and
          Prime Video already cover most genres.
        </Text>
        <Text style={styles.highlight}>
          Skipping this subscription can save you £12/month.
        </Text>
      </View>

      {/* Prompts Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Explore More</Text>
        {prompts.map((prompt) => (
          <TouchableOpacity
            key={prompt.id}
            style={styles.promptButton}
            onPress={() => handlePromptClick(prompt)}
          >
            <Text style={styles.promptText}>{prompt.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal for Dynamic Responses */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedPrompt?.text}</Text>
            <Text style={styles.modalText}>{selectedPrompt?.response}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 5,
  },
  highlight: {
    fontSize: 16,
    color: '#FF6347',
    fontWeight: 'bold',
    marginTop: 10,
  },
  promptButton: {
    backgroundColor: '#FFF',
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  promptText: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 14,
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
    marginBottom: 15,
  },
  modalText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default SimplifyNewSubscription;
