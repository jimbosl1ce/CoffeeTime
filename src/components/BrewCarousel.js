import * as React from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function BrewCarousel({coffeeStuff}) {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/LinkArrow.png')} />
      <View style={styles.numCupsContainer}>
        <Text style={styles.brewText}>1 - 4 Cups</Text>
      </View>
      <Image style={styles.brewMethodImage} source={coffeeStuff.image} />
      <Text style={styles.brewMethodText}>{coffeeStuff.method}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 256,
    width: 190,
    backgroundColor: '#fff',
    borderColor: 'rgba(57, 152, 239, 1)',
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 15
  },
  numCupsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  brewText: {
    color: 'rgba(57, 152, 239, 1)',
  },
  logo: {
    position: 'absolute',
    height: 16,
    width: 16,
    top: 10,
    right: 10
  },
  brewMethodImage: {
    width: 190,
    height: 190
  },
  brewMethodText: {}
})

export default BrewCarousel;