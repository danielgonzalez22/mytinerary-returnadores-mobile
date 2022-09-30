import React from 'react'
import { StyleSheet,Image } from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import colors from '../config/colors';
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
      <AppButton title='Sign Up' color={colors.primary} width={'70%'} />
    </Screen>
  );
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems:'center',
    backgroundColor:colors.beige
  },
  logo: {
    width: 150,
    height: 70,
    resizeMode:'contain',
    alignSelf: 'center',
    marginBottom: 10
  }
})