import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import imagem from './astronautagame.png';

function InstaGitHubCard({githubUser}){
  const [liked, setLikeState] = useState(false);

  return(
    <View>
      {/*instaCardHeader*/}
      <View style={{ flexDirection: 'row', padding: 15, alignItems:'center' }}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
          source={{uri:`https://github.com/${githubUser}.png`}}
        />
        <Text style={{ marginLeft: 10 }}>{githubUser}</Text>
      </View>
      {/*instaCardHeader*/}
      
      {/*instaCardImage*/}     
      <Image
        style={{
          width: '100%',
          height: 350,
        }}
        source={{uri:`https://github.com/${githubUser}.png`}}
      />
      {/*instaCardImage*/}

      {/*footer*/}
      <View style={{ flexDirection: 'row', padding: 15, alignItems:'center' }}>
        <TouchableOpacity onPress={() => setLikeState(!liked)}>
          {liked && <AntDesign name="heart" size={24} color="red" />}
          {!liked && <AntDesign name="hearto" size={24} color="black" />}          
        </TouchableOpacity>
      </View>
      {/*footer*/}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          [
            'KaiqueLimaNovaes',
            'elvis-brito',
            'renatazadravec',
            'emersonope',
            'SergioAmarante',
            'LeandroSoares31'
          ].map((githubUser) => <InstaGitHubCard key={githubUser} githubUser={githubUser} />)
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
