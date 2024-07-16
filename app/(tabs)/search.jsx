import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CTextInput from '../../components/comp/CTextInput';
import LineButtWithIcon from '../../components/comp/LineButtWithIcon';

const buttons = [
  {
    iconName: 'man-outline',
    text: "Hommes",
  },
  {
    iconName:'woman-outline',
    text: "Femmes",
  },
  {
    iconName:"happy-outline",
    text: "Enfants",
  },
  {
    iconName:"home-outline",
    text: "Maison",
  },
  {
    iconName:"sparkles-outline",
    text: "Divertissement",
  },
  {
    iconName:"paw-outline",
    text: "Animaux",
  },
]

const Search = () => {
  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <CTextInput
            placeholder="Rechercher un article ou un membre"
          />
          {buttons.map(button =>( 
            <TouchableOpacity key={button.iconName}>
              <LineButtWithIcon iconName={button.iconName} text={button.text} description={button.description}/>
            </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    }
});