import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
function AppButton({ title, onPress, color,width }) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor:color, width:width}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
export default AppButton;
const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom:10,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})