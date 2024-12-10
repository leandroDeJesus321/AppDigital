import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons, images} from '../../constants'

const TabIcon = ({icon, color, name, focused}) =>{
  return (
    <View style={styles.container}>
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        style={styles.images}
      />
      <Text style={styles.Text}>
        {name}
      </Text>
    </View>
  )
}


const TabsLayout = () => {
  return (
    <>
    <Tabs 
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#FFA001',
      tabBArInactiveTinColor: '#CDCDE0',
      tabBarStyle:{
        backgroundColor: '#161622',
        borderTopWidth: 1,
        borderTopColor: '#232533',
        height: 60,
        
      }
    }}
    >
      {/* Tabela do botão de home page */}
       <Tabs.Screen 
        name='home' 
        options={{
          title: "Home", 
          headerShown: false, 
          tabBarIcon: ({color, focused}) =>(<TabIcon icon={icons.home} color={color} name="Home" focused={focused}/>)}} 
          
          />
          {/* Tela de favoritos */}
          <Tabs.Screen 
        name='favoritos' 
        options={{
          title: "Favoritos", 
          headerShown: false, 
          tabBarIcon: ({color, focused}) =>(<TabIcon icon={icons.bookmark} color={color} name="Favorito" focused={focused}/>)}} 
          
          />
          {/* Criação */}
          <Tabs.Screen 
        name='create' 
        options={{
          title: "Create", 
          headerShown: false, 
          tabBarIcon: ({color, focused}) =>(<TabIcon icon={icons.plus} color={color} name="Create" focused={focused}/>)}} 
          
          />
          {/* Perfil do usuário */}
          <Tabs.Screen 
        name='perfil' 
        options={{
          title: "Perfil", 
          headerShown: false, 
          tabBarIcon: ({color, focused}) =>(<TabIcon icon={icons.profile} color={color} name="Perfil" focused={focused}/>)}} 
          
          />
    </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  images:{
    width: 25,
    height: 25,
  },
  Text:{
    fontSize: 9,
    textAlign: 'center',
    color: 'white',
  },

})