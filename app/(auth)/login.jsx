import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import {React, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../../constants';
import Formulario from '../../components/Formulario';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { getCurrentUser, loginFuncao } from '../../libs/appwrite';
import { router } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalProvider';


const login = () => {

  const [isSubmitting, setSubmitting] = useState(false);
  const { setUser, setIsLogged } = useGlobalContext();
  const [form, setform] = useState({
    email: '',
    senha: '',
  })

  const submit = async () =>{
      if(form.email === "" || form.senha === ""){
        alert('Error, preencha todos os campos.')

      }
  
      setSubmitting(true);
  
      try {
        router.replace('/home')
        console.log('Login, Email:',form.email,' Senha:',form.senha)
        await loginFuncao(form.email, form.senha);
        const result = await getCurrentUser();
        setUser(result);
        setIsLogged(true);
        
        alert("Login realizado com sucesso!");
      } catch (error) {
        Alert.alert('Error', error.message)
      } finally{
        setSubmitting(false)
      }
  
      
    }


  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={images.logo}
            resizeMode='contain'
            style={styles.img}
          />
          <Text style={styles.txtLogin}>
            Login na Aora
          </Text>

          <Formulario
            title="Email"
            value={form.email}
            handleChangeText={(e)=> setform({...form, email: e})}
            otherStyles="marginTop: 10"
            keyboardType="email-address"
          />

          <Formulario
            title="Senha"
            value={form.senha}
            handleChangeText={(e)=> setform({...form, senha: e})}
            otherStyles="marginTop: 10"
          />

          <CustomButton
            title="Login"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View style={styles.block}>
            <Text style={styles.font}>
              Não está registrado?
            </Text>
            <Link style={styles.link} href={'/cadastro'} >Cadastrar</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
    alignItems:'center'
  },
  container:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  img:{
    width: 115,
    height:35,
  },
  txtLogin:{
    fontFamily: 'ShareTechMono-Regular',
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'semibold'
  },
  font:{
    fontSize: 14,
    color: 'gray',
    fontFamily: ''
  },
  block:{
    justifyContent: 'center',
    paddingTop: 10,
    flexDirection: 'row',
    gap: 20,
  },
  link:{
    color: 'orange',
    fontSize: 14,
    fontWeight: 'semibold'
  }

})