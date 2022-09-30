import 'react-native-gesture-handler';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform
}
  from 'react-native';
import colors from '../config/colors';

export default function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.suitcase} source={require("../../assets/suitcase.png")} />
      <Text style={styles.title}>MyTineraries</Text>
      <View style={styles.carousel}>
        <Text style={{ textAlign: 'center' }}>Popular Itineraries</Text>
        <Image style={{ height: '95%', resizeMode: 'cover' }} source={{ uri: 'https://fondosmil.com/fondo/63364.jpg' }} />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} color={colors.primary} />
        <AppButton title="Sign Up" onPress={() => navigation.navigate('Sign Up')} color='#cf9c5b' />
      </View>
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
    marginBottom: 10
  },
  carousel: {
    backgroundColor: colors.brown,
    width: '80%',
    borderRadius:6,
    flex: 4.6,
    marginVertical: 10,
    padding: 10
  },
  screen: {
    alignItems: 'center'
  },
  suitcase: {
    resizeMode: 'contain',
    flex: 1,
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