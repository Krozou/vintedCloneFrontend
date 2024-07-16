import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CTextInput from '../../components/comp/CTextInput';
import LineButtWithIcon from '../../components/comp/LineButtWithIcon';
import { Link } from 'expo-router';
const fButs = [
  {
    text: "Mon profil",
  },
  {
    text: "Paramètres du compte",
  },
  {
    text: "Paiements",
  },
  {
    text: "Envoi",
  },
  {
    text: "Sécurité",
  },
  {
    text: "Déconnexion",
    link:'/createAccount'
  },
]

const Profile = () => {
  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          {fButs.map(button =>(
              <TouchableOpacity key={button.text}>
                  <LineButtWithIcon 
                    style={styles.button} 
                    iconName={button.iconName} 
                    text={button.text} 
                    description={button.description}
                    link={button.link?button.link:'/profile'}
                    />
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  })