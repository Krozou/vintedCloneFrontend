import React from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import v1 from '../assets/images/v1.png';


const  IndexScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View style={styles.centeredView}>
          <Image 
            source={v1}
            style={styles.v1}
          />
          <TouchableOpacity>
            <Link href="/sign-in" style={{color:"#4BB0A9", alignSelf:"center"}}>Continuer</Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  centeredView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  v1: {
    width: 200,
    height: 100,
  },
 
  butContainer:{
    alignSelf: 'center',
    height: 50,
    backgroundColor:"black",
    width: "90%",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 15  ,
  },

});
export default  IndexScreen