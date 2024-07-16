import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'

const MarketCard = (props) => {
    return (
        <View style={styles.card}>
          <ImageBackground
            source={props.bg}
            style={styles.backgroundImage}
          />
          <View style={styles.title}>
            <Image source={props.icon} style={{width:30, height:30}}/>
            <Text>{props.title}</Text>
          </View>
          <Text style={[styles.description, { color: props.fg }]}>
            {props.desc}
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#3AA6B9'}]}
            onPress={props.onPress}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>
              {props.buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      card: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 15,
        gap: 8,
        overflow: 'hidden',
        height: 200,
        backgroundColor: '#fff',
        borderWidth:1,
        borderRadius:5,
        borderColor: "#ddd"
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: 200,
        resizeMode: 'cover',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row',
        gap: 10,
        alignItems: "center",
        justifyContent: 'flex-start',
      },
      description: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 12,
      },
    });
    

    export default MarketCard