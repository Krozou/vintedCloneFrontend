import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import CTextInput from '../../components/comp/CTextInput'
import AlertCard from '@/components/comp/AlertCard';
import MarketCard from '@/components/comp/MarketCard';
import shoesFont from '../../assets/images/shoesFont.jpg';
import lilD from '../../assets/images/lilDiamond.png';
import ItemList from '@/components/comp/ItemList';
import ar1 from '../../assets/images/ar1.png';
import ar2 from '../../assets/images/ar2.png';
import ar3 from '../../assets/images/ar3.png';
import chat1Img from '../../assets/images/chat1.jpg';
import chienBgImg from '../../assets/images/chienBg.jpg';
import jokerImg from '../../assets/images/joker.jpg';




const Home = () => {

    const [text, setText] = useState("");
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <CTextInput
              placeholder="Rechercher un article ou un membre"
            />
            <AlertCard 
              title='Façonne Vinted à ton image !' 
              desc='Trouve les articles qui te correspondent le mieux. Ajoute ta taille et ta pointure, ainsi que tes marques préférées.'
              buttonText='Personnaliser'
              fg='white'
              bg='#3AA6B9'
            />
            <MarketCard 
              title="Vérification de l'larticle" 
              desc='Achète des pièces vérifiées par nos experts.'
              buttonText='Explorer les articles de créateurs'
              bg={shoesFont}
              icon={lilD}
            />
            <Text style={styles.actuTitle}>Fil d'actu</Text>
            <ItemList/>
          </View>
        </ScrollView>
      </SafeAreaView>
      
    )
}
  
export default Home
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
      borderWidth: 1,
      borderColor: '#ddd',
      marginBottom: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginVertical: 10,
      backgroundColor: '#fff',
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 14,
      color: '#333',
    },

    actuTitle: {
      fontWeight: "bold",
      fontSize:25,
      alignSelf: 'flex-start',
      paddingHorizontal: 20,
      paddingTop: 30,
    },
  })