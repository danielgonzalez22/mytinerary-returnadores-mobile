import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}
export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 13,
    marginVertical: 10
  },
  icon:{
    marginRight:10,
  },
  textInput: {
    color:colors.dark,
    fontSize: 17,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  }
})