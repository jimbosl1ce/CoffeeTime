import * as React from 'react';
import { Pressable, View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.logo} source={require('../../assets/Coffee.png')} />
        <Text style={styles.largeFont}>Get Started.</Text>
        <Text>CREATE AN ACCOUNT TO GET BREWING.</Text>
      </View>
        <TextInput style={styles.textInput} placeholder="FIRST NAME"/>
        <TextInput style={styles.textInput} placeholder="LAST NAME"/>
        <TextInput style={styles.textInput} placeholder="EMAIL"/>
        <TextInput style={styles.textInput} placeholder="PASSWORD"/>
        <Pressable style={styles.btn} title="Create Account">
          <Text style={styles.btnTxt} >CREATE ACCOUNT</Text>
        </Pressable>
        <Text style={styles.alreadySignedUp} >ALREADY HAVE AN ACCOUNT?</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 45,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#F7F7F7"
  },
  largeFont: {
    fontWeight: "700",
    fontSize: 58,
  },
  logo: {
    height: 34,
    width: 34
  },
  innerContainer: {
    width: 285,
    alignSelf: 'stretch',
    marginVertical: 30
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  textInput: {
    backgroundColor: '#ffffff',
    display: 'flex',
    width: 285,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 4,
    marginBottom: 10
  },
  btn: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F08F5D',
    borderColor: '#20232a',
    width: 290
  },
  btnTxt: {
    color: '#ffffff',
    paddingVertical: 20
  },
  alreadySignedUp: {
    marginTop: 30,
    color: 'rgba(240,143,93,1)'
  }
});

export default SignupScreen;