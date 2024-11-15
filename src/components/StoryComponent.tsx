import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import SecondStory from './SecondStory';
import ThirdStory from './ThirdStory';
import FirstStory from './FirstStory';
import ShareButton from './ShareButton';
import {CloseIcon} from '../assets/svg';

const {width} = Dimensions.get('window');
const stories = [
  {component: <FirstStory />},
  {
    component: <SecondStory />,
  },
  {component: <ThirdStory />},
];

const StoryComponent: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const pausedProgress = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const currentStory = stories[currentStoryIndex];
  const [wentBack, setWentBack] = useState(0);

  const renderStoryContent = ({component}: {component: JSX.Element}) => {
    return component;
  };

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 3,
        useNativeDriver: false,
      }).start(() => {
        pausedProgress.current = 0;
        setCurrentStoryIndex(currentStoryIndex + 1);
        progressAnim.setValue(0);
      });
    } else {
      setWentBack(0);
      setCurrentStoryIndex(0);
    }
  };

  /**
   * Starts the progress animation.
   * The animation begins from the last paused position and
   * runs until the end. When the animation is finished,
   * it calls goToNextStory to move to the next story.
   **/
  const runProgressAnimation = () => {
    progressAnim.setValue(pausedProgress.current);
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: (1 - pausedProgress.current) * 10000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        goToNextStory();
      }
    });
  };

  const getProgressBarWidth = (storyIndex: number, currentIndex: number) => {
    if (currentIndex > storyIndex) {
      return '100%';
    }
    if (currentIndex === storyIndex) {
      return progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
      });
    }
    return '0%';
  };

  const goToPreviousStory = () => {
    if (isPaused) {
      setIsPaused(false);
    }
    pausedProgress.current = 0;
    progressAnim.setValue(0);
    if (currentStoryIndex === 0) {
      setWentBack(wentBack + 1);
      runProgressAnimation();
    } else {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const handlePressIn = () => {
    //for pause if user holds the screen
    setIsPaused(true);
  };

  const handlePressOut = () => {
    setIsPaused(false);
  };

  const handleScreenTouch = (evt: GestureResponderEvent) => {
    const touchX = evt.nativeEvent.locationX;
    if (touchX < width / 4) {
      goToPreviousStory();
    } else {
      goToNextStory();
    }
  };

  useEffect(() => {
    if (!isPaused) {
      runProgressAnimation();
    } else {
      progressAnim.stopAnimation(value => {
        pausedProgress.current = value;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStoryIndex, isPaused]);

  return (
    <View style={styles.container}>
      <Pressable
        disabled={currentStoryIndex === 1}
        onPress={handleScreenTouch}
        onLongPress={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.container}>
        <View style={styles.container}>
          {renderStoryContent(currentStory)}
          <View style={styles.progressBarContainer}>
            {stories.map((story, index) => (
              <View key={index} style={styles.progressBarBackground}>
                <Animated.View
                  style={[
                    styles.progressBar,
                    {
                      width: getProgressBarWidth(index, currentStoryIndex),
                    },
                  ]}
                />
              </View>
            ))}
          </View>
        </View>
        <ShareButton primary={currentStoryIndex !== stories.length - 1} />
        <CloseIcon style={styles.closeIcon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    borderRadius: 18,
  },
  progressBarContainer: {
    position: 'absolute',
    top: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    height: 3,
    justifyContent: 'center',
    width: '100%',
  },
  progressBarBackground: {
    flex: 1,
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 2,
  },
  progressBar: {
    height: 3,
    backgroundColor: 'white',
  },
  topBar: {
    position: 'absolute',
    left: 15,
    top: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  buttonContainer: {
    position: 'absolute',
    right: 10,
    top: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  closeIcon: {position: 'absolute', right: 40, top: 90},
});

export default StoryComponent;
