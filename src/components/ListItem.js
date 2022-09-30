import React from 'react';
import { View, StyleSheet,Text,Image } from 'react-native';
import colors from '../../config/colors';

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
    // flexDirection: 'row'
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  image: {
    width: 330,
    height: 330,
    marginBottom: 10,
    flex: 1,
    alignItems: 'center'
  },
  subTitle:{
    color:colors.medium
  },
  title:{
    fontWeight:'500'
  }
})