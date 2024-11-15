import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../utils/constants';
import useUtilStore from '../stores/utilStore';

const SecondStory: React.FC = () => {
  const {appData} = useUtilStore();
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <LinearGradient
          style={styles.gradient}
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0,1)']}
          locations={[0.2, 1]}
        />
        <ScrollView
          scrollEnabled={true}
          contentContainerStyle={styles.scrollContainer}
          onStartShouldSetResponder={() => true}>
          <Text style={styles.text}>{appData?.strength.snippet.header}</Text>

          <View style={styles.textContainer}>
            {appData?.strength.snippet.messages.map((message, index) => (
              <Text key={index}>
                <Text
                  style={[
                    styles.convoTextHeader,
                    {
                      color:
                        message.sender === 'You'
                          ? COLORS.amori_lavender
                          : COLORS.amori_pink,
                    },
                  ]}>
                  {message.sender}:{' '}
                </Text>
                <Text style={styles.convoText}>{message.content}</Text>
              </Text>
            ))}
          </View>
          <Text style={styles.bottomText}>
            {appData?.strength.snippet.footer}
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default SecondStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 118,
  },
  innerContainer: {
    backgroundColor: 'black',
    borderRadius: 12,
    flex: 1,
  },
  gradient: {
    width: '100%',
    height: 200,
    position: 'absolute',
    bottom: 0,
    borderRadius: 12,
    zIndex: 10,
  },
  scrollContainer: {
    paddingHorizontal: 32,
    paddingTop: 64,
    paddingBottom: 200,
  },
  text: {
    color: 'white',
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
  },
  textContainer: {marginTop: 40, rowGap: 16},
  convoText: {
    fontFamily: 'Manrope-Medium',
    fontSize: 14,
    lineHeight: 20.81,
    color: 'white',
  },
  convoTextHeader: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    lineHeight: 20.81,
  },
  bottomText: {
    marginTop: 40,
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: 'white',
  },
});
