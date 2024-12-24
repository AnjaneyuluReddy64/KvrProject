import React, {useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

const SortComponent = () => {
  // Sample data: List of products
  const products = [
    {id: '1', name: 'Apple', price: 1.5},
    {id: '2', name: 'Banana', price: 0.5},
    {id: '3', name: 'Orange', price: 2.0},
    {id: '4', name: 'Mango', price: 1.8},
    {id: '5', name: 'Pineapple', price: 3.0},
  ];

  // State for sorting criteria
  const [sortedProducts, setSortedProducts] = useState(products);

  // Sort by Name
  const sortByName = () => {
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
    setSortedProducts(sorted);
  };

  // Sort by Price
  const sortByPrice = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price); // Sort by price
    setSortedProducts(sorted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sort Products</Text>

      {/* Sort buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Sort by Name" onPress={sortByName} />
        <Button title="Sort by Price" onPress={sortByPrice} />
      </View>

      {/* Displaying the List of Products */}
      <FlatList
        data={sortedProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>
              {item.name} - ${item.price.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SortComponent;
