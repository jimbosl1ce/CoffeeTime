import * as React from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Measurement from '../components/Measurement';

function SelectBrewScreen({ route, navigation }) {
  const { method, image } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topTextContainer}>
        <Text style={styles.heroText}>{method}</Text>
        <Text style={styles.subText}>The Timeless Classic</Text>
      </View>
      <Image style={styles.brewMethodImage} source={image} />
      <Measurement />
    </View>
  );
}

const styles = StyleSheet.create({
  // TOP
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
  topTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroText: {
    fontWeight: '700',
    fontSize: 42,
    marginBottom: 15
  },
  brewMethodImage: {
    height: 150,
    width: 150
  }

})

export default SelectBrewScreen;