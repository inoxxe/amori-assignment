import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useUtilStore from '../stores/utilStore';

const {height} = Dimensions.get('window');

const FirstStory: React.FC = () => {
  const {appData} = useUtilStore();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/left.png')}
        style={styles.leftCurtain}
      />
      <Image
        source={require('../assets/images/right.png')}
        style={styles.rightCurtain}
      />
      <Text style={styles.titleText}>YOUR RESULTS</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{appData?.results.score}</Text>
        <Text style={styles.scorePercentage}>%</Text>
      </View>
      <Text style={styles.relationshipScoreText}>
        Your relationship health status is at {appData?.results.score}%
      </Text>
      <Text style={styles.descriptionText}>{appData?.results.description}</Text>
    </View>
  );
};

export default FirstStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 114,
    alignItems: 'center',
  },
  leftCurtain: {position: 'absolute', left: 0, height: height},
  rightCurtain: {position: 'absolute', right: 0, height: height},
  titleText: {
    fontFamily: 'Manrope-Bold',
    color: 'white',
    fontSize: 13,
    lineHeight: 17.76,
  },
  scoreContainer: {
    marginTop: 110,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  scoreText: {
    fontFamily: 'FKRomanStandardTrial-Regular',
    fontSize: 88.04,
    lineHeight: 92,
    color: 'white',
  },
  scorePercentage: {
    fontFamily: 'FKRomanStandardTrial-Medium',
    color: 'white',
    fontSize: 37.38,
    lineHeight: 37,
  },
  relationshipScoreText: {
    marginTop: 80,
    paddingHorizontal: 72,
    fontFamily: 'FKRomanStandardTrial-Regular',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  descriptionText: {
    paddingHorizontal: 56,
    marginTop: 32,
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
  },
});
