import React, {useState, useEffect} from 'react';
import { Button, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Brew Data
import { pourover } from '../staticData/brewData';
// Component
import Measurement from '../components/Measurement';

function BrewExecuteScreen({ route, navigation }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
  useEffect(() => {
    let interval = null;
    if (seconds < 180 && isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  let percentage = ((seconds / 180) * 100) + '%';

  function stepFunction(brewMethod) {
    if (seconds < 20) {
      return brewMethod
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.stepCountCountainer}>
          <Text style={styles.numberIndicator}>1</Text>
          <Text>/6</Text>
        </View>
        <Text>POUROVER</Text>
        <Pressable>
          <Image source={require('../../assets/Close.png')} />
        </Pressable>
      </View>

      <View style={styles.stepsDescriptionContainer}>
        <View style={styles.stepsDescriptionTop}>
          <View style={styles.stepCircle}>
            <Text>1</Text>
          </View>
          <Text style={styles.stepText}>Rinse the Filter</Text>
        </View>
        <Text style={styles.stepTextDetails}>Place and rinse the Kalita Wave filter in the dripper. This removes the paper flavor from the filter and warms everything up. Heat up your mug while you’re at it.</Text>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{secondsToHms(seconds)}</Text>
        <Pressable
          style={styles.startStop}
          onPress={() => setIsActive(!isActive)}
        >
          <Text style={styles.brewText}>
            {isActive ? 'Pause' : 'Start'}
          </Text>
        </Pressable>
      </View>
      <Image style={styles.filter} source={require('../../assets/Filter.png')} />
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
        }}></View>
        <View style={styles.parentLine}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>
      </View>
      <View style={styles.nextStepsText}>
        <Text>NEXT: MEASURE & GRIND</Text>
      </View>
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