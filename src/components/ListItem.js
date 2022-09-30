import React from 'react';
import { View, StyleSheet,Text,Image } from 'react-native';
import colors from '../config/colors';

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:image}} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

export default ListItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding:15
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subTitle:{
    color:colors.medium
  },
  title:{
    fontWeight:'500'
  }
})