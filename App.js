import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import imagem from './astronautagame.png';

function InstaGitHubCard({githubUser}){
  return(
    <View>
      {/*instaCardHeader*/}
      <View>
        <Text>{githubUser}</Text>
      </View>
      {/*instaCardHeader*/}
      
      {/*instaCardImage*/}
      <View>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
          }}
          source={{uri:`https://github.com/${githubUser}.png`}}
        />
      </View>
      
      <Image
        style={{
          width: '100%',
          height: 350,
        }}
        source={{uri:`https://github.com/${githubUser}.png`}}
      />
      {/*instaCardImage*/}

      {/*footer*/}
      <View>
        <Text>
          <AntDesign name="hearto" size={24} color="black" />
        </Text>
      </View>
      {/*footer*/}
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
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
    </View>
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
