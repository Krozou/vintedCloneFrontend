import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroButton from '@/components/comp/HeroButton';
import { Link } from 'expo-router';


const SignIn = () => {

  const [values, setValues] = useState({
    email:"",
    password:"",
  });

  const handleChange = (name, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <Text>
            {values.email}
            {values.password}
          </Text>
            <TextInput
              style={styles.textInput}
              placeholder='identifiant ou adresse email'
              placeholderTextColor="#aaa"
              name="email"
              value={values.email}
              onChangeText={(text) => handleChange('email', text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Mot de passe'
              placeholderTextColor="#aaa"
              name="password"
              value={values.password}
              onChangeText={(text) => handleChange('password', text)}
            />
            <HeroButton 
              text="Se connecter"
              bg="#4BB0A9"
              color="white"
              />
              <Link href="/sign-up" style={{color:"#4BB0A9", textDecorationLine:"underline"}}>Pas de compte?</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 10,
      height: 700,
    },
    textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '95%',
    marginBottom: 20,
    paddingBottom: 5,
  }
});