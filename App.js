import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // allows React to interact with redux
import MyApp from './src/MyApp';

const initState = {
  myCounter: 0
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case "INC_COUNTER":
      return { myCounter: state.myCounter + 1};
    case "DEC_COUNTER":
      return state.myCounter >= 1 ? { myCounter: state.myCounter - 1} : state;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
