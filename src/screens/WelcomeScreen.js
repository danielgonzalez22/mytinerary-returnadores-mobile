import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground
}
  from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.backImage} source={require("../../assets/background-map-vintage.jpg")}>
      <View style={styles.hero}>
        <Image style={styles.suitcase} source={require("../../assets/suitcase.png")} />
        <Text style={styles.title}>MyTineraries</Text>
        <Button style={styles.startButton} title='Start a Journey' onPress={() => alert("caca")}></Button>
      </View>
      <View style={styles.carousel}>
        <Text>Popular Itineraries</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.signupButton}></View>
      <StatusBar style="light" />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  backImage: {
    alignItems: 'center',
    resizeMode: 'contain',
    height: '100%'
  },
  hero: {
    marginTop: 40,
    flex: 3,
  },
  suitcase: {
    resizeMode: 'contain',
    flex: 1
  },
  title: {
    color: '#f64f4f',
    fontFamily: 'Roboto',
    fontSize:50,
    fontWeight:'bold',
    flex: 1,
    alignSelf: 'center',
  },
  startButton: {
    flex: 1,
    width: '80%',
    height: 70,
    borderRadius:10
  },
  carousel: {
    backgroundColor: 'coral',
    width: '80%',
    borderStyle: 'solid',
    flex: 6,
    marginTop:10
  },
  loginButton: {
    width: '90%',
    height: 70,
    borderRadius:10,
    backgroundColor: '#fc5c65',
    marginTop:10
  },
  signupButton: {
    width: '90%',
    height: 70,
    borderRadius:10,
    backgroundColor: '#4ecdc4',
    marginVertical:10
  }
});