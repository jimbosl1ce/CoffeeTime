import React, {useState, useEffect} from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Brew Data
import brewObject from '../staticData/brewData';
// Component
import Measurement from '../components/Measurement';

function BrewExecuteScreen({ route, navigation }) {
  const { method } = route.params;
  const [seconds, setSeconds] = useState(0);
  const [brewObj, setBrewObj] = useState(brewObject[method].stepOne);
  const [isActive, setIsActive] = useState(false);

  let percentage = ((seconds / 180) * 100) + '%';

  function secondsToHms(d) {
    d = Number(d);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    if (s < 10) {
      s = '0' + s;
    }
    var mDisplay = m > 0 ? m + (m == 1 ? "" : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return '0' + m + ':' + s;
  };

  function buttonHelper () {
    if (brewObj.step === '1') {
      return (
        <Pressable
          style={styles.stepOneTwo}
          onPress={() => setBrewObj(brewObject[method].stepTwo)}
        >
          <Text style={styles.brewText}>
            Step 1 Complete
          </Text>
        </Pressable>
      )
    } else if (brewObj.step === '2') {
      return (
        <Pressable
          style={styles.stepOneTwo}
          onPress={() => setBrewObj(brewObject[method].stepThree)}
        >
          <Text style={styles.brewText}>
            Step 2 Complete
          </Text>
        </Pressable>
      )
    } else if(seconds === 180) {
      return (
        <Pressable
          style={styles.stepOneTwo}
          onPress={() => navigation.navigate('Rate', { method })} // MOVE TO RATING SCREEN
        >
          <Text style={styles.brewText}>
            Rate your brew!
          </Text>
        </Pressable>
      )
    } else if (brewObj.step !== '1' && brewObj.step !== '2' ) {
      return (
        <Pressable
          style={styles.startStop}
          onPress={() => setIsActive(!isActive)}
        >
          <Text style={styles.brewText} >
            { isActive ? 'Pause' : 'Start' }
          </Text>
        </Pressable>
      )
    }
  };



  function returnImage () {
    let imageObject = {
      Pourover: {
        one: <Image style={styles.filter} source={require('../../assets/Filter.png')} />,
        two: <Image style={styles.filter} source={require('../../assets/Beans.png')} />,
        three: <Image style={styles.filter} source={require('../../assets/Filter.png')} />,
        four: <Image style={styles.filter} source={require('../../assets/Kettle.png')} />,
        five: <Image style={styles.filter} source={require('../../assets/Filter.png')} />,
        six: <Image style={styles.filter} source={require('../../assets/Mug.png')} />,

      }
    };

    if (brewObj.step === '1') {
      return imageObject[method].one;
    } else if (brewObj.step === '2') {
      return imageObject[method].two;
    } else if (brewObj.step === '3') {
      return imageObject[method].three;
    } else if (brewObj.step === '4') {
      return imageObject[method].four;
    } else if (brewObj.step === '5') {
      return imageObject[method].five;
    } else if (brewObj.step === '6') {
      return imageObject[method].six;
    }
  };



  // useEffect for Timer:
  useEffect(() => {
    let interval = null;

    if (seconds < 180 && isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if ( method === 'Pourover' &&
        brewObj.step !== '1' &&
        brewObj.step !== '2') {
        if (seconds > 45 && seconds < 120) {
        setBrewObj(brewObject[method].stepFour);
      } else if (seconds > 120 && seconds < 180) {
        setBrewObj(brewObject[method].stepFive);
      } else if (seconds === 180) {
        setBrewObj(brewObject[method].stepSix);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return brewObj.image === null ? null : (
     (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.stepCountCountainer}>
            <Text style={styles.numberIndicator}>{brewObj.step}</Text>
            <Text> / 6</Text>
          </View>
          <Text>{ method }</Text>
          <Pressable onPress={() => navigation.navigate('Home')} >
            <Image source={require('../../assets/Close.png')} />
          </Pressable>
        </View>

        <View style={styles.stepsDescriptionContainer}>
          <View style={styles.stepsDescriptionTop}>
            <View style={styles.stepCircle}>
              <Text>{brewObj.step}</Text>
            </View>
            <Text style={styles.stepText}>{brewObj.title}</Text>
          </View>
          <Text style={styles.stepTextDetails}>{brewObj.stepText}</Text>
        </View>

        <View style={styles.timerContainer}>
          { (brewObj.step !== '1' && brewObj.step !== '2' && seconds < 180) ? <Text style={styles.timer}>{secondsToHms(seconds)}</Text> : <></>}
          { buttonHelper() }
        </View>


        {/* {imageObject[method].one} */}
        {returnImage()}

        {(brewObj.step !== '1' && brewObj.step !== '2' && seconds < 180) ? (
          <View style={styles.dotsContainer}>
          <View style={{
              position: 'absolute',
              borderRadius: 5,
              width: percentage,
              height: 6,
              backgroundColor: 'rgba(57, 152, 239, 1)',
              borderColor: 'blue',
              top: -1,
              left: 0,
              zIndex: 2,
            }}
          />

          <View style={styles.parentLine}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
          </View>
        </View>
        ) : <></>}

        <View style={styles.nextStepsText}>
          <Text>NEXT: {brewObj.next}</Text>
        </View>

      </View>
    )
  )
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
    backgroundColor: "#F7F7F7",
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginBottom: 120,
  },
  numberIndicator: {
    fontWeight: '700'
  },
  stepCountCountainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  stepsDescriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 375,
    height: 341,
    borderWidth: 1,
    borderColor: '#777',
    marginBottom: 20,
  },
  stepsDescriptionTop: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#fff',
    paddingBottom: 20
  },
  stepCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(57,152,239,1)',
    marginRight: 15
  },
  stepText: {
    fontSize: 20
  },
  filter: {
    height: 80,
    width: 120,
    position: 'absolute',
    top: '20%',
    right: '10%'
  },
  stepTextDetails: {
    width: 300,
    fontSize: 16,
    lineHeight: 25,
    color: '#666666',
    paddingTop: 20
  },
  dotsContainer: {
    width: 300,
    height: 1,
    marginBottom: 23
  },
  parentLine: {
    width: '100%',
    height: 2,
    borderWidth: 2,
    borderColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  circle: {
    height: 10,
    width: 10,
    borderColor: 'rgba(57, 152, 239, 1)',
    borderWidth: 2,
    borderRadius: 50,
  },
  timerContainer: {
    width: 290,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 23,
  },
  stepOneTwo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 290,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(57, 152, 239, 1)',
    borderRadius: 5,
  },
  startStop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(57, 152, 239, 1)',
    borderRadius: 5,
  },
  brewText: {
    color: '#fff'
  },
  timer: {
    lineHeight: 22,
    fontSize: 20,
  },
  nextStepsText: {
    width: 290,
    display: 'flex',
    justifyContent: 'flex-start'
  }

})

export default BrewExecuteScreen;