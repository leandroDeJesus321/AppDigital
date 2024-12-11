import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, isLoading, Texto}) => {
  return (
    <TouchableOpacity 
        style={styles.button}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
        >
      <Text style={styles.font}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    font:{
        fontFamily: 'ShareTechMono-Regular',
        color: 'black',
        fontWeight: 'heavy',
        fontSize: 20,
    },
    button:{
        backgroundColor: 'orange',
        minHeight: 62,
        justifyContent: 'center',
        alignItems:'center',
        width: '90%',
        marginTop: 25,
        marginHorizontal: 'auto'
        
    }
})