import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/constants';
import {ShareIcon} from '../assets/svg';

type Props = {primary: boolean};

const ShareButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: props.primary
            ? COLORS.amori_lavender
            : 'transparent',
          borderWidth: props.primary ? 0 : 1,
        },
      ]}>
      <ShareIcon />
      <Text style={styles.text}>Share</Text>
    </TouchableOpacity>
  );
};

export default ShareButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 74,
    borderRadius: 87,
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 16,
    columnGap: 8,
    zIndex: 12,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  text: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    lineHeight: 19.46,
    color: 'white',
  },
});
