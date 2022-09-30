import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../config/colors';

function ListItem({ title, subTitle, image, IconComponent }) {
  return (
    <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={{ uri: image }} />}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
    </View>
  );
}

export default ListItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.light
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium
  },
  title: {
    fontWeight: '500'
  }
})