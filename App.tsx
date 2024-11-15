import {ActivityIndicator, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import StoryComponent from './src/components/StoryComponent';
import Config from 'react-native-config';
import useUtilStore from './src/stores/utilStore';

const App = () => {
  const {setAppData} = useUtilStore();
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const fetchAppData = async () => {
    try {
      fetch(`${Config.API_URL}/api/v1/analysis`).then(response =>
        response.json().then(data => {
          setAppData(data.data);
          setIsFetching(false);
        }),
      );
    } catch (error) {
      Alert.alert('error', error);
    }
  };
  useEffect(() => {
    fetchAppData();
  }, []);

  if (isFetching) {
    return (
      <ActivityIndicator
        size={'large'}
        style={{alignSelf: 'center', flex: 1, justifyContent: 'center'}}
      />
    );
  }

  return <StoryComponent />;
};

export default App;
