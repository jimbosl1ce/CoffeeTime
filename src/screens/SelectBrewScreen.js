import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Measurement from '../components/Measurement';

function SelectBrewScreen({ route, navigation }) {
  const { method, image } = route.params;
  const [amount, setAmount] = useState({
    cup: 1,
    water: 400,
    waterOz: 13.5,
    coffeeBeans: 24,
    tbspn: 1.5,
  });

  function plus() {
    if (amount.cup > 4.9) {
      return;
    } else {
      setAmount({
        ...amount,
        cup: amount.cup + .5,
        coffeeBeans: amount.coffeeBeans + 12,
        water: amount.water + 200,
        waterOz: amount.waterOz + 7.25,
        tbspn: amount.tbspn + .75
      })
    }
  };

  function minus() {
    if (amount.cup <= 0.5) {
      return;
    } else {
      setAmount({
        ...amount,
        cup: amount.cup - .5,
        coffeeBeans: amount.coffeeBeans - 12,
        water: amount.water - 200,
        waterOz: amount.waterOz - 7.25,
        tbspn: amount.tbspn - .75
      })
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topTextContainer}>
        <Text style={styles.heroText}>{method}</Text>
        <Text style={styles.subText}>The Timeless Classic</Text>
      </View>
      <Image style={styles.brewMethodImage} source={image} />
      <Measurement amount={amount} plus={plus} minus={minus}/>
      <Pressable
        onPress={() => navigation.navigate('Execute')}
        style={styles.startBrew}
      >
         <Text style={styles.startBrewFont}>START BREW</Text>
       </Pressable>
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
  },
  startBrew: {
    top: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
    backgroundColor: 'rgba(57,152,239, 1)',
    borderRadius: 50,
  },
  startBrewFont: {
    color: '#fff',
    alignSelf: 'center',
  }

})

export default SelectBrewScreen;