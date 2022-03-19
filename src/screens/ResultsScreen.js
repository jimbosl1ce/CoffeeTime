import React, {useState} from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ResultsScreen({ navigation, route }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const { quizScore } = route.params;
  return (
    <>
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
<ScrollView>
      <View style={styles.tryThisContainer}>
        <Pressable style={styles.tryThisRow} onPress={() => setOpen1(!open1)}>
          <Text style={styles.tryThisText}>Grind Finer</Text>
          <Image style={styles.tryThisIcon} source={require('../../assets/TryThisPlus.png')}/>
        </Pressable>
          {open1 ? (<Text style={styles.brewBetterText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</Text>) : (<></>)}
        <Pressable style={styles.tryThisRow} onPress={() => setOpen2(!open2)}>
          <Text style={styles.tryThisText}>Brew More Slowly</Text>
          <Image style={styles.tryThisIcon} source={require('../../assets/TryThisPlus.png')}/>
        </Pressable>
        {open2 ? (<Text style={styles.brewBetterText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</Text>) : (<></>)}
        <Pressable style={styles.tryThisRow} onPress={() => setOpen3(!open3)}>
          <Text style={styles.tryThisText}>Use Hotter Water</Text>
          <Image style={styles.tryThisIcon} source={require('../../assets/TryThisPlus.png')}/>
        </Pressable>
        {open3 ? (<Text style={styles.brewBetterText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</Text>) : (<></>)}
      </View>
      </ScrollView>

      <View style={styles.actionContainer}>
        <Pressable style={styles.startBrewing} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.fontStartBrewing}>Home</Text>
          <Image style={styles.logo} source={require('../../assets/Coffee.png')} />
        </Pressable>
      </View>

    </View>
    </>
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
  actionContainer: {
    position: 'absolute',
    width: '75%',
    top: '97%',
    right: '25%',
  },
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
  },
  tryThisContainer: {
    display: 'flex'
  },
  tryThisRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopColor: 'rgba(64, 63, 63, 1)',
    borderTopWidth: 1,
  },
  tryThisText: {
    color:"rgba(255, 255, 255, 1)",
    fontSize: 22
  },
  tryThisIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 14,
    width: 14
  },
  brewBetterText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    paddingBottom: 50,
  }
})

export default ResultsScreen;