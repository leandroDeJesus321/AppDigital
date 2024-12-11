import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {React, useState} from 'react';

import { icons } from '../constants';

const Formulario = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setshowPassword] = useState(false)

  return (
    <View style={styles.main}>
      <Text style={styles.texto}>{title}</Text>
      <View style={styles.input}>
        <TextInput 
            style={styles.inputTexto}
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#7b7b8b'
            onChangeText={handleChangeText}
            secureTextEntry ={title === 'Senha' && !showPassword}
        />

        {title === 'Senha' && (
        <TouchableOpacity onPress={()=>setshowPassword(!showPassword)}>
            <Image 
                source={!showPassword ? icons.eye : icons.eyeHide}
                style={styles.img}
                resizeMode='contain'
            />
        </TouchableOpacity>)}
      </View>
    </View>
  )
}

export default Formulario

const styles = StyleSheet.create({
    main:{
        flex: 1,
        gap: 20,
        marginTop: 20,

    },img:{
        width: 32,
        height: 32,
        opacity: 0.3,
    },
    texto:{
        fontFamily: 'ShareTechMono-Regular',
        fontWeight: 'medium',
        color: 'white',

    },
    input:{
        width: '100%',
        flexDirection: 'row',
        height: 64,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: 'rgba(60, 60, 60, 0.6)',
        borderRadius: 4,
        backgroundColor: 'rgba(20, 20, 20, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        
    }, 
    inputTexto:{
        flex: 1,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'semibold',
        fontSize: 20,

    }
})