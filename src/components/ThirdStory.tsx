import React, {useRef, useEffect} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {HandIcon} from '../assets/svg';
import useUtilStore from '../stores/utilStore';

const {height} = Dimensions.get('window');
const ThirdStory: React.FC = () => {
  const {appData} = useUtilStore();
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(rotation, {
      toValue: appData?.['rizz-score'] ?? 0,
      duration: 4000,
      useNativeDriver: true,
    });

    animation.start();
  }, [appData, rotation]);

  return (
    <View style={styles.container}>
      <Text style={styles.emoticonText}>🥵</Text>
      <Image source={require('../assets/images/Meter.png')} />
      <Animated.View
        style={[
          styles.handIconContainer,
          {
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['-90deg', '90deg'],
                }),
              },
            ],
          },
        ]}>
        <HandIcon />
      </Animated.View>
      <Text style={styles.titleText}>Smooth Operator</Text>
      <Text style={styles.subText}>
        With moves this smooth, you’re in a league of your own 😎
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  handIconContainer: {
    marginTop: -105,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  emoticonText: {
    position: 'absolute',
    fontSize: 40,
    top: height / 2 - 140,
    right: 40,
  },
  titleText: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'FKRomanStandardTrial-Regular',
    lineHeight: 36.4,
  },
  subText: {
    marginTop: 16,
    fontFamily: 'Manrope-Medium',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default ThirdStory;
