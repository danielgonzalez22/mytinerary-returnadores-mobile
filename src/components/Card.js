import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import colors from '../config/colors';


function Card({ title, subTitle, image }) {
  return (
    <TouchableHighlight underlayColor={colors.beige}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
export default Card;
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.light,
    marginBottom: 20,
    overflow: 'hidden',
    alignItems: 'center'
  },
  detailsContainer: {
    padding: 20,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
})