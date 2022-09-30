import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import Card from './src/components/Card';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';

export default function App() {
  return (
    <MessagesScreen/>
    );
  }
  





  // <View style={{
  //   backgroundColor: '#f8f4f4',
  //   padding: 20,
  //   paddingTop: 100
  // }}>
  //   <Card
  //     title="Ciudad de las cacas"
  //     subTitle="Mierdalandia"
  //     image={'https://fondosmil.com/fondo/63364.jpg'}
  //   />
  // </View>