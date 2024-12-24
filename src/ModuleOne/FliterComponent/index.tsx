import React, {useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const FilterComponent = () => {
  // Sample data: List of products
  const products = [
    {id: '1', name: 'Apple', price: 1.5},
    {id: '2', name: 'Banana', price: 0.5},
    {id: '3', name: 'Orange', price: 2.0},
    {id: '4', name: 'Mango', price: 1.8},
    {id: '5', name: 'Pineapple', price: 3.0},
  ];

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterPrice, setFilterPrice] = useState(2.0);

  // Filter by price
  const filterByPrice = (price: any) => {
    const filtered = products?.filter(product => product?.price <= price);
    setFilterPrice(price);
    setFilteredProducts(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Products by Price</Text>

      {/* Price filter dropdown */}
      <Text>Select a price range:</Text>
      <Picker
        selectedValue={filterPrice}
        style={styles.picker}
        onValueChange={itemValue => filterByPrice(itemValue)}>
        <Picker.Item label="No filter" value={10} />
        <Picker.Item label="Up to $2" value={2} />
        <Picker.Item label="Up to $1.5" value={1.5} />
      </Picker>

      {/* Displaying the List of Products */}
      <FlatList
        data={filteredProducts}
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
    flex: 0,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FilterComponent;
