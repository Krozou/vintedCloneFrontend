import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import CenteredButtonCard from '@/components/comp/CenteredButtonCard';
import LineButtWithIcon from '@/components/comp/LineButtWithIcon';
import HeroButton from '@/components/comp/HeroButton';
import { useNavigation } from '@react-navigation/native';

const Sell = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({
    image: "",
    title: "",
    description: "",
    category: "",
    brand: "",
    state: "",
    price: "",
  });

  const handleChange = (name, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handlePress = async () => {
    console.log('Button pressed');
    console.log('Values:', values);
    try {
      const res = await axios.post('http://192.168.252.172:5000/api/items', values);
      setValues({
        image: "",
        title: "",
        description: "",
        category: "",
        brand: "",
        state: "",
        price: "",
      });
      console.log('Response from API:', res.data);
      navigation.navigate('home');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fbuts = ["Catégorie", "Marque", "Etat"];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.suptitle}>{values.title} {values.description}</Text>
          <CenteredButtonCard
            desc="jusqu'à 20 photos."
            linkText="Voir astuces"
            butText='+ Ajouter des photos'
            link="#"
          />
          <View style={styles.part}>
            <Text style={{ color: 'gray' }}>Titre</Text>
            <TextInput
              style={styles.textInput}
              placeholder='ex: Chemise Sézane verte'
              placeholderTextColor="gray"
              name="title"
              value={values.title}
              onChangeText={(text) => handleChange('title', text)}
            />
            <Text style={{ color: 'gray' }}>Décris ton article</Text>
            <TextInput
              name="description"
              style={styles.textArea}
              multiline
              numberOfLines={4}
              placeholder="ex: porté quelque fois, taillé correctement"
              placeholderTextColor="gray"
              value={values.description}
              onChangeText={(text) => handleChange('description', text)}
            />
          </View>
          <View style={styles.fbuts}>
            {fbuts.map(each => <LineButtWithIcon key={each} text={each} bg='#ddd' />)}
          </View>
          <View style={styles.priceButt}>
            <LineButtWithIcon text="Prix sans les frais de ports" bg='#ddd' />
          </View>
          <HeroButton
            text="Ajouter"
            color="white"
            bg='#3AA6B9'
            onPress={handlePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sell;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suptitle: {
    paddingTop: 30,
    fontWeight: 'bold',
    fontSize: 20,
  },
  part: {
    marginVertical: 20,
    padding: 20,
    width: '92%',
    backgroundColor: '#ddd',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '95%',
    marginBottom: 20,
    paddingBottom: 5,
  },
  textArea: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    minHeight: 100,
    paddingBottom: 5,
    paddingTop: 10,
  },
  fbuts: {
    marginBottom: 20,
  },
  priceButt: {
    marginBottom: 20,
  }
});
