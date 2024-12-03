import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';

const ExplainContractTerms = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  const prompts = [
    {
      id: 1,
      text: "What should I ask the service provider?",
      response:
        "Ask about price caps, early termination penalties, and discounts for paperless billing. Inquire whether monthly usage estimates align with this plan.",
    },
    {
      id: 2,
      text: "What options do I have?",
      response:
        "1. Stick to the current plan with no early termination fee.\n2. Upgrade to a renewable energy option for £10/month more.\n3. Opt for a pay-as-you-go plan if your consumption varies seasonally.",
    },
    {
      id: 3,
      text: "Explain the risks in simple terms.",
      response:
        "This plan locks you into a fixed price. If market prices drop, you might overpay. Early termination fees apply if you leave the plan early.",
    },
  ];

  const empathyMessage =
    "We understand navigating complex agreements can feel overwhelming, especially after frustrating calls. Here's how we can simplify it for you.";

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
      <Text style={styles.title}>British Gas Contract</Text>

      {/* Empathy Message */}
      <View style={styles.empathyContainer}>
        <Text style={styles.empathyText}>{empathyMessage}</Text>
      </View>

      {/* Key Sections of the Contract */}
      <View style={styles.section}>
        <Text style={styles.header}>Key Sections of the Agreement</Text>
        <Text style={styles.text}>1. Fixed Price Plan: £120/month for 12 months.</Text>
        <Text style={styles.text}>2. Early Termination Fee: £60 if canceled before contract end.</Text>
        <Text style={styles.text}>3. Usage Estimates: Based on average household consumption.</Text>
        <Text style={styles.text}>
          4. Renewable Option: Add £10/month to support green energy.
        </Text>
      </View>

      {/* Previous User History */}
      <View style={styles.section}>
        <Text style={styles.header}>Your Previous History</Text>
        <Text style={styles.text}>- Switched from Fixed Plan to Variable Plan in 2023.</Text>
        <Text style={styles.text}>- No record of early termination penalties so far.</Text>
        <Text style={styles.text}>- Average monthly consumption: £115/month.</Text>
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
  empathyContainer: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  empathyText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
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
  promptButton: {
    backgroundColor: '#FFF',
    borderColor: '#4CAF50',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  promptText: {
    color: '#4CAF50',
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

export default ExplainContractTerms;
