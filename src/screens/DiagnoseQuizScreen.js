import React, {useState, useEffect} from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuizButtons from '../components/QuizButtons'

function DiagnoseQuizScreen({ route, navigation }) {
  const [quizScore, setQuizScore] = useState(0);
  const [step, setStep] = useState(1);
  const [diagnoseObject] = useState({
    where: null,
    aftertaste: null,
    acidity: null,
    flavor: null,
    mouthfeel: null
  })

  function onQuizButtonClick(num = 0) {
    setQuizScore(quizScore + num);
    setStep(step + 1);
  }

  function stepHelper (num){
    let complete = styles.complete;
    let active = styles.active;
    let incomplete = styles.incomplete;
    if (step > num) {
      return complete;
    } else if (num === step) {
      return active;
    } else {
      return incomplete
    }
  }

  let percentLine = 0;
  let question = <Text style={styles.heroFont}><Text style={styles.innerText}>Where</Text> do you taste it on your tongue?</Text>;

  if (step === 2) {
    percentLine = 25;
    question = <Text style={styles.heroFont}>What was the <Text style={styles.innerText}>aftertaste</Text> like?</Text>;
  } else if (step === 3) {
    percentLine = 50;
    question = <Text style={styles.heroFont}>What was the <Text style={styles.innerText}>acidity</Text> like?</Text>;
  } else if (step === 4) {
    percentLine = 75;
    question = <Text style={styles.heroFont}>What was the <Text style={styles.innerText}>flavor</Text> like?</Text>;
  } else if (step === 5) {
    percentLine = 100;
    question = <Text style={styles.heroFont}>What was the <Text style={styles.innerText}>mouthfeel</Text> like?</Text>;
  } else if (step > 5) {
    percentLine = 100;
    question = <Text style={styles.heroFont}>Check out your <Text style={styles.innerText}>results</Text>.</Text>;
  }


  return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Pressable onPress={() => setStep(step - 1)} >
            <Image source={require('../../assets/Caret.png')} />
          </Pressable>
          <Text>DIAGNOSE</Text>
          <Pressable onPress={() => setStep(step + 1)} >
            <Image source={require('../../assets/Close.png')} />
          </Pressable>
        </View>

        <View style={styles.stepsContainer}>
          <View style={styles.parentLine}>
          <View style={styles.completeLineParent} />
          <View style={{
            position: 'absolute',
            width: `${percentLine}%`,
            top: '50%',
            height: 3,
            backgroundColor: 'rgba(23, 163, 76, 1)',
            zIndex: 2,
          }} />
              <View style={stepHelper(1)}>
                <Text>1</Text>
              </View>
              <View style={stepHelper(2)}>
                <Text>2</Text>
              </View>
              <View style={stepHelper(3)}>
                <Text>3</Text>
              </View>
              <View style={stepHelper(4)}>
                <Text>4</Text>
              </View>
              <View style={stepHelper(5)}>
                <Text>5</Text>
              </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          {question}
        </View>

        {(step > 5) ? (
          <>
            <Pressable style={styles.quizButton} onPress={()=> navigation.navigate('Results', { quizScore })}>
              <Text style={styles.questionHeroText}>Your Results</Text>
            </Pressable>
          </>
        ) : (
          <View style={styles.quizButtons}>
            <QuizButtons step={step} onQuizButtonClick={onQuizButtonClick}/>
          </View>
        )}

      </View>
    )

}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: "rgba(246, 246, 246, 1)",
    paddingVertical: 33,
    paddingHorizontal: 43,
    color: '#fff'
  },
  topContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  heroFont: {
    fontSize: 42,
    fontWeight: '700',
    lineHeight: 40,
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20
  },
  parentLine: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  active: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(23, 163, 76, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 30,
    width: 30,
    borderRadius: 70,
    zIndex: 2,
  },
  complete: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(23, 163, 76, 1)',
    backgroundColor: 'rgba(23,163,76,1)',
    height: 30,
    width: 30,
    borderRadius: 70,
    zIndex: 2,
  },
  incomplete: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 30,
    width: 30,
    borderRadius: 70,
    zIndex: 2,
  },
  completeLineParent: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  innerText: {
    color: 'rgba(23, 163, 76, 1)',
  },
  textContainer: {
    height: 125,
    width: '100%',
    marginBottom: 125
  },
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

export default DiagnoseQuizScreen;