import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function HomeButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='home-circle' color={colors.white} size={40}/>
      </View>
    </TouchableOpacity>
  );
}
export default HomeButton;

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.primary,
    borderColor:colors.white,
    borderWidth:10,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom:33,
  }
})