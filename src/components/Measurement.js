import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Measurement({coffeeStuff, amount, plus, minus}) {

  return (
    <View style={styles.container}>
       <View style={styles.measurementContainer}>
         <Pressable onPress={() => minus()} style={styles.plusMinus}>
           <Image source={require('../../assets/Minus.png')} />
         </Pressable>
         <Text style={styles.plusMinusFont}>{amount.cup} Cups</Text>
         <Pressable onPress={() => plus()} style={styles.plusMinus}>
           <Image source={require('../../assets/Plus.png')} />
         </Pressable>
       </View>
       <View style={styles.measurementContainer}>
         <Text>Water</Text>
         <View style={styles.measureContainer}>
           <Text style={styles.measureHeroText}>{amount.water}ml</Text>
           <Text style={styles.measureSupportingText}>{amount.waterOz} OZ.</Text>
         </View>
       </View>
       <View style={styles.measurementContainer}>
         <Text>Coffee Beans</Text>
         <View style={styles.measureContainer}>
           <Text style={styles.measureHeroText}>{amount.coffeeBeans}g</Text>
           <Text style={styles.measureSupportingText}>~{amount.tbspn} TBSP</Text>
         </View>
       </View>
       <View style={styles.measurementContainer}>
         <Text>Grind</Text>
         <View style={styles.measureContainer}>
           <Text style={styles.measureHeroText}>Medium-Fine</Text>
           <Text style={styles.measureSupportingText}>BLACK PEPPER</Text>
         </View>
       </View>
       <View style={styles.measurementContainer}>
         <Text>Time</Text>
         <View style={styles.measureContainer}>
           <Text style={styles.measureHeroText}>3:00</Text>
           <Text style={styles.measureSupportingText}>BREW TIME</Text>
         </View>
       </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 290,
    width: 350,
  },
  measurementContainer: {
    height: 70,
    borderTopWidth: 2,
    borderColor: '#fff',
    paddingVertical: 15,
    display:'flex',
    flexDirection: 'row',
    width: 350,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plusMinus: {
    margin: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  plusMinusFont: {
    fontSize: 20
  },
  measureContainer: {
    display: 'flex'
  },
  measureHeroText: {
    alignSelf: 'flex-end',
    fontWeight: '700',
    fontSize: 16,
    paddingBottom: 5
  },
  measureSupportingText: {
    alignSelf: 'flex-end',
    color: 'rgba(102,102,102,1)',
    letterSpacing: 0.6
  },

})

export default Measurement;