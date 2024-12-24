import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const quotes = [
  'The best way to get started is to quit talking and begin doing.',
  "Don't let yesterday take up too much of today.",
  'You learn more from failure than from success.',
  "It's not whether you get knocked down, it's whether you get up.",
];

const CounterApp = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>{quote}</Text>
      <Button title="Show New Quote" onPress={getRandomQuote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quote: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CounterApp;
