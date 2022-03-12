import * as React from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DiagnoseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <Pressable style={styles.accountPress}>
          <Image style={{height: 25, width: 25, marginRight: 10}} source={require('../../assets/AccountButton.png')} />
          <Text style={styles.font}>TREY</Text>
        </Pressable>
        <Pressable style={styles.logOut}>
          <Text style={styles.font}>LOG OUT</Text>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heroFont}>Make better coffee.</Text>
        <Text style={styles.regularFont}>If you need some help, use our coffee quiz to learn how to make it better next time.</Text>
      </View>
      <View style={styles.actionContainer}>
        <Pressable style={styles.startBrewing} onPress={()=> navigation.navigate('Quiz')}>
          <Text style={styles.fontStartBrewing}>Diagnose Your Brew</Text>
          <Image style={styles.logo} source={require('../../assets/CHANGEME.png')} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingVertical: 33,
    paddingHorizontal: 43,
    color: '#fff'
  },
  accountContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 65
  },
  textContainer: {
    borderWidth: 1,
    marginBottom: 30
  },
  actionContainer: {},
  startBrewing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(23, 163, 76, 1)',
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4
  },
  fontStartBrewing: {
    fontSize: 20,
    color: '#fff'
  },
  heroFont: {
    fontSize: 58,
    fontWeight: '700',
    lineHeight: 55,
    color: '#fff'
  },
  regularFont: {
    color: '#fff'
  },
  logo: {
    height: 30,
    width: 30,
    marginRight: 10
  },
  accountPress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: 100
  },
  logOut: {
    alignSelf: 'center'
  },
  font: {
    color: '#fff'
  }
})

export default DiagnoseScreen;