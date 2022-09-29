import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <WelcomeScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}
