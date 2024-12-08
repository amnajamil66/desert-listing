import React from "react";
import { View, StyleSheet } from "react-native";
import DessertList from "./components/DesertList";
import Title from "./components/Title";

const App = () => {
  const desserts = [
    { name: "Chocolate Mousse", calories: 250 },
    { name: "Cheesecake", calories: 450 },
    { name: "Ice Cream", calories: 550 },
    { name: "Brownie", calories: 300 },
  ];

 
  const lowCalorieDesserts = desserts.filter((dessert) => dessert.calories < 500);

  
  const arrangeDesserts = lowCalorieDesserts.sort((a, b) => a.calories - b.calories);

  return (
    <View style={styles.container}>
      <Title text="Low-Calorie Desserts" />
      <DessertList desserts={arrangeDesserts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
});

export default App;