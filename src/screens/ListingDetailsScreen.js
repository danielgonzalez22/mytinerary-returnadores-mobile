import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import ListItem from '../components/ListItem'
function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={{ uri: 'https://fondosmil.com/fondo/63364.jpg' }}></Image>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Ciudad de las cacas</Text>
        <Text style={styles.country}>Mierdalandia</Text>
        <View style={styles.userContainer}>
          <ListItem
          image={'https://ohmygeek.net/wp-content/uploads/2019/10/Harold-pain-meme.jpg'}
          title='Harold'
          subTitle='0 Itineraries'
          />
        </View>
      </View>
    </View>
  );
}
export default ListingDetailsScreen;
const styles = StyleSheet.create({
  country: {
    color: colors.secondary,
    fontWeight:'bold',
    fontSize:20,
    marginVertical:10
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  userContainer:{
    marginVertical:40
  }
})