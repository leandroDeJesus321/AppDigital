import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
  return (
    <FlatList
        data={posts}
        keyExtractor={(item)=>item.$id}
        renderItem={({item})=>(
            <Text style={styles.texto}>
                {item.id}
            </Text>
        )}
        horizontal
    />
  )
}

export default Trending

const styles = StyleSheet.create({
    texto:{
        fontSize: 16,
        color: 'white',
    }
})