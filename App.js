import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';
import Header from './components/Header';

//simple incrementing button
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Header title="Counting app" />
      <Text>{counter}</Text>
      <Button title="Increment by 1" onPress={() => setCounter(counter + 1)} />
      <Text>Current count is {counter}</Text>
    </View>
  );
};

export default App;
