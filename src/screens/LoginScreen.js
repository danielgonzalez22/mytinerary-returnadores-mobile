import React from 'react'
import { StyleSheet,Image } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/suitcase.png')} />
      <AppTextInput
        placeholder='User email'
        icon='email'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='Password'
        textContentType='password'
        secureTextEntry
      />
      <AppButton title='Login'color='#f64f4f' width={'70%'} />
    </Screen>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems:'center'
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})