import * as React from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ResultsScreen({ navigation, route }) {
  const { quizScore } = route.params;
  return (
    <View style={styles.container}>

      <View style={styles.accountContainer}>
        <Pressable style={styles.accountPress}>
          <Image style={styles.logo} source={require('../../assets/AccountButton.png')} />
          <Text style={styles.font}>TREY</Text>
        </Pressable>
        <Pressable style={styles.logOut}>
          <Text style={styles.font}>LOG OUT</Text>
        </Pressable>
      </View>

      {(quizScore > 3) ? (
        <View style={styles.textContainer}>
          <Text style={styles.heroFont}>Your coffee is under-extracted.</Text>
          <Text style={styles.regularFont}>If you need some help, use our coffee quiz to learn how to make it better next time.</Text>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.heroFont}>Your coffee is over-extracted</Text>
          <Text style={styles.regularFont}>If you need some help, use our coffee quiz to learn how to make it better next time.</Text>
        </View>
      )}

      <View style={styles.actionContainer}>
        <Pressable style={styles.startBrewing} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.fontStartBrewing}>Home</Text>
          <Image style={styles.logo} source={require('../../assets/Coffee.png')} />
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
    // borderWidth: 1,
    marginBottom: 30
  },
  actionContainer: {},
  startBrewing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'yellow',
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4
  },
  fontStartBrewing: {
    fontSize: 20
  },
  heroFont: {
    fontSize: 44,
    fontWeight: '700',
    lineHeight: 55,
    color: '#fff'
  },
  regularFont: {
    color: '#fff'
  },
  logo: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  accountPress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    width: 100
  },
  logOut: {
    alignSelf: 'center'
  },
  font: {
    color: '#fff'
  }
})

export default ResultsScreen;