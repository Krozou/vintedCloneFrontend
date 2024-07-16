import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const IconText = (props) => {
  return (
    <View style ={styles.head}>
        {props.name&&<Icon style={styles.circle} name={props.name} size={30} color="#3AA6B9"/>}
        <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
    head:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
    },
    text:{
        fontWeight:'bold'
    },
});