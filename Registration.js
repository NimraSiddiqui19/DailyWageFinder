import React, { useState } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { TextInput, Button, Text, HelperText } from "react-native-paper";

const WorkRegistrationForm = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [contact, setContact] = useState("");

  // Validation functions
  const isContactInvalid = () => contact.length > 0 && !/^\d{10,15}$/.test(contact);
  const isExperienceInvalid = () => experience.length > 0 && isNaN(experience);

  const handleSubmit = () => {
    // Trim values to remove extra spaces
    const trimmedName = name.trim();
    const trimmedSkills = skills.trim();
    const trimmedExperience = experience.trim();
    const trimmedContact = contact.trim();

    if (!trimmedName || !trimmedSkills || !trimmedExperience || !trimmedContact) {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }
    if (isContactInvalid()) {
      Alert.alert("Error", "Invalid contact number. Enter 10-15 digits.");
      return;
    }
    if (isExperienceInvalid()) {
      Alert.alert("Error", "Experience must be a number.");
      return;
    }

    Alert.alert("Success", "Registration Submitted!");
    // Send data to backend here if needed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Work Registration</Text>

      <TextInput
        label="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Skills (e.g., Plumbing, Carpentry)"
        value={skills}
        onChangeText={setSkills}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Experience (Years)"
        value={experience}
        onChangeText={setExperience}
        style={styles.input}
        mode="outlined"
        keyboardType="numeric"
      />

      <TextInput
        label="Contact Number"
        value={contact}
        onChangeText={setContact}
        style={styles.input}
        mode="outlined"
        keyboardType="phone-pad"
      />
      <HelperText type="error" visible={isContactInvalid()}>
        Enter a valid phone number (10-15 digits)
      </HelperText>

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 10,
  },
});

export default WorkRegistrationForm;
