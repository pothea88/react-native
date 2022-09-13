import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  View,
} from 'react-native';
import Product from '../Product';
const baseUrl = 'https://jsonplaceholder.typicode.com';
import axios from 'axios';
// import {products} from '../../Product.json';

const GetData = () => {
  const [products, setProducts] = useState([]);
  axios.get(`${baseUrl}/comments`).then(response => {
    setProducts(response.data);
  });
  return (
    <View>
      <Text style={styles.mainTitle}>Product List</Text>
      <FlatList
        initialNumToRender={7}
        data={products}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            key={item.id}
            // onPress={() => this._onPress(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <Product
              key={item.id}
              id={item.id}
              title={item.name}
              description={item.email}
              image={item.body}
            />
          </TouchableHighlight>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainTitle: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#08025c',
  },
});
export default GetData;
