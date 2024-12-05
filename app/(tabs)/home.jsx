import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>home</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
      fontFamily: 'ShareTechMono-Regular',
      fontSize: 20,
    },
  })