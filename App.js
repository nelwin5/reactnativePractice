import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For Google icon

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <View style={styles.logoPlaceholder}></View>

      {/* Tagline */}
      <Text style={styles.tagline}>Tagline</Text>

      {/* Welcome Back */}
      <Text style={styles.title}>Welcome back!</Text>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+63</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
      </View>

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      {/* Remember Me and Forgot Password */}
      <View style={styles.rowContainer}>
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
          <Text>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <Text style={styles.orText}>or</Text>

      {/* Continue with Google */}
      <TouchableOpacity style={styles.googleButton}>
        <MaterialIcons name="google" size={24} color="black" />
        <Text style={styles.googleButtonText}>Continue With Google</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text>No account? </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logoPlaceholder: {
    width: '100%',
    height: 80,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  tagline: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  countryCode: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 5,
  },
  linkText: {
    color: '#007BFF',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default LoginScreen;
