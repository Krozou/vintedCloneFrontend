import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const AlertCard = (props) => {
  return (
      <View style={
          {
            backgroundColor: props.bg, 
            width: '100%',
            justifyContent: 'center',
            alignItems:"left",
            padding: 15,
            gap:8
          }
        }
      >
      <Text 
        style={
          {
            color:props.fg, 
            fontSize:20,
            }
        }
      >
        {props.title}
      </Text>
      <Text 
        style={{color:props.fg}}>{props.desc}</Text>
      <TouchableOpacity 
        style={
          {
            backgroundColor: props.fg,
            alignItems: 'center',
            padding: 10,
            borderRadius: 5
          }}
      >
        <Text style={{color:props.bg}}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AlertCard;