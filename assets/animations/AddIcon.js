import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';
import {VStack} from 'native-base';
import React, {useRef, useEffect} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export const AddIcon = ({focused}) => {
  const animation = useRef(null);
  const isFirstClicked = useRef(true);
  useEffect(() => {
    if (isFirstClicked.current) {
      if (focused) {
        animation.current.play(37, 37);
      } else {
        animation.current.play(0, 0);
      }
      isFirstClicked.current = false;
    } else if (focused) {
      animation.current.play(0, 37);
    } else {
      animation.current.play(37, 0);
    }
  }, [focused]);
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.buttonContainer}
      colors={['#D0D3FF', '#985EE1']}>
      <LottieView
        style={styles.lottieContainer}
        ref={animation}
        loop={false}
        autoPlay={false}
        source={require('./lottie/add.json')}
      />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieContainer: {
    height: 68,
    width: 68,
  },
});