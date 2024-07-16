import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconText from './IconText';
import Link from 'expo-router'

const LineButtWithIcon = (props) => {
  return (
    <View style={[styles.container, {backgroundColor:props.bg}]}>
        <View style={styles.textSide}>
            
            <IconText name={props.iconName} text={props.text}/>
            {props.description && <Text style={styles.desc}>{props.description}</Text>}
            
        </View>
        <Icon style={styles.circle} name="chevron-forward-outline" size={20} color="gray" />
    </View>
  )
}

export default LineButtWithIcon

const styles = StyleSheet.create({
    container:{
        width: "92%",
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textSide:{
        justifyContent: 'center',
    },
    desc:{
        position: 'relative',
        color: "gray",
    }
})