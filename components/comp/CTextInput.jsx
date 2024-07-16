import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';



const CTextInput = (props) => {

    const [text, setText] = useState("");

    return (
        <View style={styles.inputContainer}>
            <Icon name="search-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            placeholderTextColor="#666"
            value={text}
            onChangeText={setText}
            />
        </View>
  )
}

export default CTextInput

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: "90%",
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
});