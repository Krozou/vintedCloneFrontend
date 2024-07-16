import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import React from 'react'

const createAccount = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                <Text>createt</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
)}

export default createAccount

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10
    }
})
