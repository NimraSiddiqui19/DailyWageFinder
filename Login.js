import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Email and password are required!");
      return;
    }
    
    alert("Login Successful!");
    navigation.navigate("Registration"); // Navigate to Registration screen after login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      
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

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
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
  signupText: { textAlign: "center", marginTop: 15, fontSize: 16 },
  signupLink: { color: "skyblue", fontWeight: "bold" }
});

export default LoginScreen;
