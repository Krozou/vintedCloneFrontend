import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HeroButton = (props) => {
  return (
        <TouchableOpacity 
          style={[styles.buttonContainer, {backgroundColor:props.bg}]} 
          onPress = {props.onPress}
        >
            <Text style={[styles.butText, {color:props.color}]}>{props.text}</Text>
        </TouchableOpacity>
  )
}

export default HeroButton

const styles = StyleSheet.create({
    buttonContainer:{
    borderRadius:5,
    padding:2,
    alignItems:'center',
    justifyContent: 'center',
    width:"92%",
    height:45,
    marginBottom: 20
  },
  butText: { fontSize:14, fontWeight:'bold'}
})