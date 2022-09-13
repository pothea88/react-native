import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Product = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.desText}>Email: {props.description}</Text>
      <View style={[styles.shadowProp, {elevation: 2}]}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 9,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5,
    // backgroundColor: '#ccc',

    elevation: 10,
  },
  container: {
    overflow: 'hidden',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#08025c',
  },
  desText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    fontStyle: 'italic',
  },
});
export default Product;
