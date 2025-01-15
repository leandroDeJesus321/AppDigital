import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'


const EmptyState = ({title,subtitle}) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.empty}
        style={styles.img}
      />
      <Text style={styles.textoPesado}>
        {title}
      </Text>
      <Text style={styles.texto}>
        {subtitle}
      </Text>
      <CustomButton
        title="Voltar a explorar"
        handlePress={()=>router.push('/create')}
        
      />

    </View>
  )
}

export default EmptyState

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    img:{
        width: 270,
        height:215,
        resizeMode: 'contain'
    },
    textoPesado:{
        color: 'white',
        fontWeight: 'semibold',
        fontSize: 20,
    },
    texto:{
        color: 'white',
        fontWeight: 'semibold',
        fontSize: 14,
    }
})