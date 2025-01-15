import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {React, useState} from 'react';

import { icons } from '../constants';

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setshowPassword] = useState(false)

  return (
    
      <View style={styles.input}>
        <TextInput 
            style={styles.inputTexto}
            value={value}
            placeholder="Pesquisar por um vídeo"
            placeholderTextColor='#7b7b8b'
            onChangeText={handleChangeText}
            secureTextEntry ={title === 'Senha' && !showPassword}
        />

        <TouchableOpacity>
            <Image
                source={icons.search}
                style={styles.img2}
            />
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    img:{
        width: 32,
        height: 32,
        opacity: 0.3,
    },
    img2:{
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    input:{
        width: '95%',
        flexDirection: 'row',
        height: 64,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: 'rgba(60, 60, 60, 0.6)',
        borderRadius: 4,
        backgroundColor: 'rgba(20, 20, 20, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4,
    }, 
    inputTexto:{
        flex: 1,
        width: '100%',
        color: 'white',
        fontWeight: 'semibold',
        fontSize: 16,
        fontFamily: 'ShareTechMono-Regular',

    }
})