import { FlatList, Image, StyleSheet, Text, View, RefreshControl } from 'react-native';
import { React, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import { recuperarTodosPosts } from '../../libs/appwrite';
import useAppwrite from '../../libs/useAppwrite';


const home = () => {
  const {data:posts, refetch} = useAppwrite(recuperarTodosPosts);

  const [refreshing, setRefreshing] = useState(false);
  

  const onRefresh = async () => {
    setRefreshing(true);
      
    await refetch();

    setRefreshing(false);
  }

  // console.log("Dados recuperados: ",posts)

  return (
    <SafeAreaView style={styles.section}>
      <FlatList
        // data={[]}
        data={posts}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <Text style={styles.texto}>
            {item.title}
          </Text>
        )}
        ListHeaderComponent={()=>(
          <View style={styles.main}>
            <View style={styles.box}>
              <View>
                <Text style={styles.textoPesado}>
                  Bem-vindo de volta!
                </Text>
                <Text style={styles.textoPesado}>
                  JSMastery
                </Text>
              </View>
              <View style={styles.section2}>
                <Image
                  source={images.logoSmall}
                  style={styles.img}
                />
              </View>
            </View>

            <SearchInput />
            <View style={styles.box2}>
              <Text style={styles.textoPesado}>
                Vídeos recentes
              </Text>

              <Trending 
                posts={[{id:1},{id:2},{id:3}] ?? []}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={()=>(
          <EmptyState
            title="Vídeo não encontrado"
            subtitle="Vídeo ainda não foi criado"
          />
        )}
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />}
      />
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
    container:{
      flex: 1,
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    section:{
      flex: 1,
      height: "100%",
      backgroundColor:'#171324',
    },
    section2:{
      marginTop: 1.5,
    },
    texto:{
      fontFamily: 'ShareTechMono-Regular',
      fontSize: 20,
      color: 'white'
    },
    textoPesado:{
      fontWeight: 'medium',
      fontSize: 16,
      color: 'white'
    },
    img:{
      width: 36,
      height: 40,
      resizeMode: 'contain'
    },
    main:{
      marginVertical: 6,
      paddingHorizontal: 4,
      marginTop: 6,
    },
    box:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 6,
    },
    box2:{
      width: '100%',
      flex: 1,
      paddingTop: 5,
      paddingBottom: 8,
    }
  })