import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Assurez-vous d'installer @expo/vector-icons
import articleFrame from "@/assets/images/articleFrame.png";


const ArticleCard = (props) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.card}>
        <View style ={styles.head}>
            <View style={styles.circle}>
                <Image source={props.creatorImg} style={styles.creatorImg}/>
            </View>
            <Text style={styles.creatorName}>{props.creatorName}</Text>
        </View>
        <ImageBackground
            source={props.bg?props.bg:articleFrame}
            style={styles.backgroundImage}
        >
            <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
            <AntDesign name={liked ? "heart" : "hearto"} size={24} color={liked ? '#3AA6B9' : "white"} />
            </TouchableOpacity>
        </ImageBackground>
        <View style={styles.content}>
            <Text style={styles.title}>
            {props.title}
            </Text>
            <Text style={styles.description}>
            {props.desc}
            </Text>
            <Text style={styles.price}>
            {props.price}
            </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  head:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal:10,
    paddingTop:10,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25,
    overflow: 'hidden',
  },

  creatorImg:{
    width:'100%', 
    height:'100%', 
    borderWidth:1
  },
  creatorName:{
    color:'gray',
  },
  backgroundImage: {
    width: '100%',
    backgroundColor:'#3AA6B9',
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  likeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 5,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 11,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3AA6B9',
  },
});

export default ArticleCard;
