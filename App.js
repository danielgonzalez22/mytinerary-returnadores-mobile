import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import Card from './src/components/Card';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import Screen from './src/components/Screen';
import Icon from './src/components/Icon';
import ListItem from './src/components/ListItem';
import AccountScreen from './src/screens/AccountScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import colors from './src/config/colors';

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.medium,
      activeTintColor: colors.light,
      inactiveBackgroundColor: colors.black,
      inactiveTintColor: colors.light
    }}>
    <Tab.Screen
      name='Home'
      component={WelcomeScreen}
      options={{
        headerShown:false,
        tabBarIcon: ({ size, color }) =>
          <MaterialCommunityIcons name='home' size={size} color={color} />
      }}
    />
    <Tab.Screen
      name='Cities'
      component={ListingsScreen}
      options={{
        headerShown:false,
        tabBarIcon: ({ size, color }) =>
          <MaterialCommunityIcons name='city' size={size} color={color} />
      }}
    />
  </Tab.Navigator>
)
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
