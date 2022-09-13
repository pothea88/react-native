import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const PASSWORD = 'password';

  const message = `Your Email is: ${email} 
    Your password is: ${password}`;

  const handleButton = () => {
    if (password !== PASSWORD) {
      alert('email or password is wrong');
    }
    if (password === PASSWORD) {
      alert(message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity onPress={handleButton} style={styles.buttonContainer}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    // paddingHorizontal:12,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
    cursor: 'pointer',
  },
  textButton: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default Login;
