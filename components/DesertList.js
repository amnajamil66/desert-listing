import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DessertList = ({ desserts }) => {
  return (
    <View>
      {desserts.map((dessert, index) => (
        <Text key={index} style={styles.product}>
          {dessert.name} - {dessert.calories} cal
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default DessertList;
