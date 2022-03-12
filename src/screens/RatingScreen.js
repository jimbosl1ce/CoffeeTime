import * as React from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function RatingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <Pressable style={styles.accountPress}>
          <Image style={{height: 25, width: 25}} source={require('../../assets/AccountButton.png')} />
          <Text style={styles.font}>TREY</Text>
        </Pressable>
        <Pressable style={styles.logOut}>
          <Text style={styles.font}>LOG OUT</Text>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heroFont}>How'd it turn out?</Text>
        <Text style={styles.regularFont}>If you need some help, use our coffee quiz to learn how to make it better next time.</Text>
      </View>
      <View style={styles.actionContainer}>
        <Pressable style={styles.badCoffee} onPress={()=> navigation.navigate('Diagnose')}>
          <Image style={styles.logo} source={require('../../assets/Smile.png')} />
          <Text style={styles.fontStartBrewing}>Not Great</Text>
          <Text style={styles.fontStartBrewing}>Diagnose</Text>
        </Pressable>
        <Pressable style={styles.goodCoffee} onPress={()=> navigation.navigate('Brew')}>
          <Image style={styles.logo} source={require('../../assets/Frown.png')} />
          <Text style={styles.fontStartBrewing}>Just Right</Text>
          <Text style={styles.fontStartBrewing}>Like</Text>
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
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 300,
    height: 190,
  },
  badCoffee: {
    display: 'flex',
    alignItems: 'center',
    width: 140,
    height: 190,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 90, 81, 1)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginRight: 10
  },
  goodCoffee: {
    display: 'flex',
    alignItems: 'center',
    width: 140,
    height: 190,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(23, 163, 76, 1)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginRight: 10
  },
  fontStartBrewing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 44,
    color: '#fff',
    fontSize: 20
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
    height: 80,
    width: 80,
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

export default RatingScreen;