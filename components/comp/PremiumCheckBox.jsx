import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PremiumCheckbox = ({ label, color, value = false, name, onToggle }) => {
    const [checked, setChecked] = useState(value);
  
    const toggleCheckbox = () => {
      const newChecked = !checked;
      setChecked(newChecked);
      if (onToggle) {
        onToggle(name, newChecked);
      }
    };
  
    return (
      <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
        <View style={[styles.checkbox, { backgroundColor: checked ? color : '#fff' }]}>
          {checked && <Ionicons name="checkmark" size={20} color="#fff" />}
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '92%'
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 0.2,
    borderColor: '#000',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  label: {
    fontSize: 13,
    color:'#aaa'
  },
});

export default PremiumCheckbox;
