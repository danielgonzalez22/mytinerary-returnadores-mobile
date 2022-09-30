import React from 'react'
import { StyleSheet,Image } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
function SignUpScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/suitcase.png')} />
      <AppTextInput
        placeholder='Name'
        icon='email'
        autoCapitalize='sentences'
        autoCorrect={false}
        keyboardType='default'
        textContentType='name'
      />
      <AppTextInput
        placeholder='Last name'
        icon='email'
        autoCapitalize='sentences'
        autoCorrect={false}
        keyboardType='default'
        textContentType='name'
      />
      <AppTextInput
        placeholder='Country'
        icon='email'
        autoCapitalize='sentences'
        autoCorrect={false}
        keyboardType='default'
        textContentType='countryName'
      />
      <AppTextInput
        placeholder='Photo url'
        icon='email'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='url'
        textContentType='URL'
      />
      <AppTextInput
        placeholder='Email'
        icon='email'
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        textContentType='emailAddress'
      />
      <AppTextInput
        placeholder='Password'
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        textContentType='password'
        secureTextEntry
      />
      <AppButton title='Sign Up' color='#f64f4f' width={'70%'} />
    </Screen>
  );
}
export default SignUpScreen;

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