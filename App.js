import React, {useState} from 'react';
import {Button, View, Text} from 'react-native';
import Header from './components/Header';

//simple incrementing button
const App = () => {
  const [counter, setCounter] = useState(0);
  function f1(counter) {
    f2(counter);
  }
  function f2(counter) {
    f3(counter);
  }
  function f3(counter) {
    setCounter(counter + 1);
  }
  return (
    <View>
      <Header title="Counting app" />
      <Text>{counter}</Text>
      <Button title="Increment by 1" onPress={() => f1(counter)} />
      <Text>Current count is {counter}</Text>
    </View>
  );
};

export default App;
