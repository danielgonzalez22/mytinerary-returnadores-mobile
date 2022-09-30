import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen'
import colors from '../config/colors';

const items = [
  {
    id: 1,
    title: 'ciudad X',
    country: 'pais X',
    image: 'https://fondosmil.com/fondo/63364.jpg'
  },
  {
    id: 2,
    title: 'ciudad XasdasdX',
    country: 'pais XasdasdaX',
    image: 'https://fondosmil.com/fondo/63364.jpg'
  }
]
function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={item.country}
            image={item.image}
          />
        }
      />
    </Screen>
  );
}
export default ListingsScreen;

const styles = StyleSheet.create({
screen:{
  padding:20,
  backgroundColor: colors.light
}
})