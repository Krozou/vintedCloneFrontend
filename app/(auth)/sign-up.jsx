import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import PremiumCheckBox from '@/components/comp/PremiumCheckBox';
import { useNavigation } from '@react-navigation/native';
import HeroButton from '@/components/comp/HeroButton';

import { Link } from 'expo-router';


const SignUp = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    receivesOffers: false,
    agreeToVinted: false,
  });

  const handleChange = (name, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    console.log('Button pressed');
    console.log('Values:',{
      username: values.username,
      email: values.email,
      password: values.password,
    });
    try {
      const res = await axios.post('http://192.168.252.157:5000/api/auth/signup',{
        username: values.username,
        email: values.email,
        password: values.password,
      });
      setValues({
        username: '',
        email: '',
        password: '',
        receivesOffers: false,
        agreeToVinted: false,
      });
      const { token } = res.data
      console.log('Response from API:', res.data);
      navigation.navigate('home');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>{values.username} {values.email} {values.password}</Text>
          <TextInput
            name='username'
            style={styles.textInput}
            placeholder="Nom d'utilisateur"
            value={values.username}
            onChangeText={(text) => handleChange('username', text)}
          />
          <TextInput
            name="email"
            style={styles.textInput}
            placeholder='Adresse email'
            value={values.email}
            onChangeText={(text) => handleChange('email', text)}
          />
          <TextInput
            name='password'
            style={styles.textInput}
            placeholder='Mot de passe'
            secureTextEntry
            value={values.password}
            onChangeText={(text) => handleChange('password', text)}
          />
          <PremiumCheckBox
            label="Je souhaite recevoir par e-mail des offres personnalisées et les dernières mises à jour de Vinted."
            color="#4BB0A9"
            name='receivesOffers'
            value={values.receivesOffers}
            onToggle={(value) => handleChange('receivesOffers', value)}
          />
          <PremiumCheckBox
            label={`En t'inscrivant tu confirmes que tu acceptes les Termes & Conditions de Vinted, avoir lu la politique de confidentialité et avoir au moins 18 ans`}
            color="#4BB0A9"
            name='agreeToVinted'
            value={values.agreeToVinted}
            onToggle={(value) => handleChange('agreeToVinted', value)}
          />
          <HeroButton
            text="S'inscrire"
            color="white"
            bg='#3AA6B9'
            onPress={handleSignUp}
          />
          <TouchableOpacity>
            <Link href="/sign-in">
            <Text style={styles.link}>Vous avez déjà un compte ? Connectez-vous</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    marginBottom: 20,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#4BB0A9',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    color: '#4BB0A9',
    marginTop: 20,
  },
});

export default SignUp;
