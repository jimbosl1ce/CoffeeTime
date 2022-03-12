import React, {useState, useEffect} from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function QuizButtons({step}) {
  let q1 = 'Back of the Tongue'
  let q2 = 'Front of the Tongue'

  if (step === 2) {
    q1 = 'Short &'
    q2 = 'Dry & Harsh'
  } else if (step === 3) {
    q1 = 'Sour'
    q2 = 'Astringent'
  } else if (step === 4) {
    q1 = 'Vegetal'
    q2 = 'Chemical'
  } else if (step === 5) {
    q1 = 'Thin & Salty'
    q2 = 'Oily & Bitter'
  }

  return(
    <>
    <Pressable style={styles.quizButton}>
      <Text style={styles.questionHeroText}>{q1}</Text>
      <Text style={styles.questionSupportingText}>NEEDS CONTENT</Text>
    </Pressable>
    <Pressable style={styles.quizButton}>
      <Text style={styles.questionHeroText}>{q2}</Text>
      <Text style={styles.questionSupportingText}>NEEDS CONTENT</Text>
    </Pressable>
    </>
  )
}


const styles = StyleSheet.create({
  quizButtons: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 200,
    width: '100%'
  },
  quizButton: {
    height: 96,
    width: '100%',
    marginBottom: 10,
    borderWidth: 2,
    borderColor:'rgba(23, 163, 76, 1)',
    paddingVertical: 27.5,
    paddingHorizontal: 20
  },
  questionHeroText: {
    fontWeight: '700',
    fontSize: 22,
    paddingBottom: 5
  },
  questionSupportingText: {
    fontSize: 12,
  }
});

export default QuizButtons;