import 'react-native-gesture-handler';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Platform
}
  from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <ImageBackground style={styles.backImage} source={require("../../assets/background-map-vintage.jpg")}>
        <Image style={styles.suitcase} source={require("../../assets/suitcase.png")} />
        <Text style={styles.title}>MyTineraries</Text>
        <AppButton title='Start a Journey' color='#f64f4f' width={'70%'} />
        <View style={styles.carousel}>
          <Text style={{ textAlign: 'center' }}>Popular Itineraries</Text>
          <Image style={{ height: '95%', resizeMode: 'cover' }} source={{ uri: 'https://fondosmil.com/fondo/63364.jpg' }} />
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" onPress={() => navigation.navigate('Login')} color='#a36226' />
          <AppButton title="Sign Up" onPress={() => navigation.navigate('Sign Up')} color='#a36226' />
        </View>
      </ImageBackground>
    </Screen>
  )
}
const styles = StyleSheet.create({
  backImage: {
    alignItems: 'center',
    resizeMode: 'contain',
    height: '100%',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
    flex: 1.4,
    marginBottom:10
  },
  carousel: {
    backgroundColor: 'coral',
    width: '80%',
    borderStyle: 'solid',
    flex: 4.6,
    marginVertical: 10,
    padding: 10
  },
  screen:{
  },
  suitcase: {
    resizeMode: 'contain',
    flex: 1,
    marginTop: 25
  },
  title: {
    color: '#f64f4f',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    fontSize: 50,
    fontWeight: 'bold',
    flex: 1,
    alignSelf: 'center',
  }
});