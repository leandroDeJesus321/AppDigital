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
      tabBarShowLabel: false 
    }}
    >
      <Tabs.Screen 
        name='home' 
        options={{
          title: "Home", 
          headerShown: false, 
          tabBarIcon: ({color, focused}) =>(<TabIcon icon={icons.home} color={color} name="Home" focused={focused}/>)}} 
          
          />
    </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  images:{
    width: 25,
    height: 25,
  },
  Text:{
    fontSize: 10,
  }

})