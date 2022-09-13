import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const message = `Your email is: ${email} 
    Your password is: ${password}`;

  const handleRegister = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (password !== confirmPassword) {
      alert('Confirmation password is wrong !');
    }
    if (reg.test(email) === true && password === confirmPassword) {
      alert(message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register Form</Text>
      <View style={{flex: 1, margin: 20}}>
        <Text style={styles.labelText}>Email</Text>
        <TextInput
          style={styles.inputForm}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        {emailError ? (
          <Text style={styles.errorText}>Email format is incorrect !</Text>
        ) : (
          ''
        )}
        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.inputForm}
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Text style={styles.labelText}>Confirm Password</Text>
        <TextInput
          style={styles.inputForm}
          value={confirmPassword}
          onChangeText={value => setConfirmPassword(value)}
        />
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.buttonContainer}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  inputForm: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#004d99',
    // paddingHorizontal:12,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
  },
  textButton: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  errorText: {
    color: '#ff0000',
    marginLeft: 10,
  },
  labelText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default Register;
