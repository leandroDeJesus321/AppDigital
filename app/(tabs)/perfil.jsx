import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Navigator } from 'expo-router'

const perfil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil</Text>
      <Text>Sou usuário desta aplicação e acho demais ela.</Text>
    </View>
  )
}

export default perfil

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
      fontSize: 20,
    },
  })