import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const CenteredButtonCard = (props) => {
  return (
    <View style={styles.container}>
        <View>
          <Text style={{color:'gray', fontSize:12}}>{props.desc}</Text>
          <Link href={props.link} style={{color:'#3AA6B9', fontSize:12}}>{props.linkText}</Link>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.butText}>{props.butText}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    padding: 20,
    justifyContent: 'space-between',
    alignItems:'center',
    paddingBottom:20,
    height: 200,
    backgroundColor: "#ddd",
    width: "92%"
  },
  buttonContainer:{
    borderWidth:1,
    borderRadius:5,
    borderColor:'#3AA6B9',
    padding:2,
    alignItems:'center',
    justifyContent: 'center',
    width:200,
    height:50,
  },
  butText: {color:'#3AA6B9', fontSize:14, fontWeight:'bold'}
})

export default CenteredButtonCard