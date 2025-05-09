import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    alert("Signup Successful!");
    navigation.navigate("Login"); // Navigate to Login screen after signup
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      
      <TextInput 
        label="Email" 
        value={email} 
        onChangeText={setEmail} 
        mode="outlined" 
        style={styles.input} 
      />
      
      <TextInput 
        label="Password" 
        value={password} 
        onChangeText={setPassword} 
        mode="outlined" 
        secureTextEntry 
        style={styles.input} 
      />

      <TextInput 
        label="Confirm Password" 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
        mode="outlined" 
        secureTextEntry 
        style={styles.input} 
      />
      
      <Button mode="contained" onPress={handleSignup} style={styles.button}>
        Signup
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { marginBottom: 10 },
  button: { backgroundColor: "#007BFF", padding: 10, marginTop: 10 },
  loginText: { textAlign: "center", marginTop: 15, fontSize: 16 },
  loginLink: { color: "skyblue", fontWeight: "bold" }
});

export default SignupScreen;
