import * as React from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// COMPONENTS:
import BrewCarousel from '../components/BrewCarousel';

const coffeeItems = [
  {
    id: 1,
    method: 'Pour Over',
    image: require('../../assets/Pourover.png')
  },
  {
    id: 2,
    method: 'Aeropress',
    image: require('../../assets/Aeropress.png')
  },
  {
    id: 3,
    method: 'French Press',
    image: require('../../assets/FrenchPress.png')
  },
  {
    id: 4,
    method: 'Coffee Pot',
    image: require('../../assets/CoffeePot.png')
  },
]

function BrewScreen({ navigation }) {
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
      <View style={styles.textContainer}>
        <Text style={styles.heroFont}>Start Brewing.</Text>
        <Text style={styles.regularFont}>SELECT A BREWER TO GET STARTED.</Text>
      </View>
      <View style={styles.actionContainer}>
        <ScrollView>
            <FlatList
              horizontal
              keyExtractor={item => item.id}
              data={coffeeItems}
              renderItem={({item}) => {
                return (
                  <Pressable onPress={() => navigation.navigate('SelectBrew', {method: item.method, image: item.image })}>
                    <BrewCarousel coffeeStuff={item} />
                  </Pressable>
                )
              }}
            />
          </ScrollView>
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
    fontSize: 58,
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

export default BrewScreen;