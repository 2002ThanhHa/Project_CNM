import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Chat() {
  return (
    <View style={{backgroundColor:'white', flex: 1}}>
      <View style={{backgroundColor:'#EFB0C9', height: 60, flexDirection:'row'}}>
          <Pressable onPress={() => navigation.navigate('HomeMain')}>
            <AntDesign name="left" size={22} color="white" style={{marginTop: 18, marginLeft: 10}} />
          </Pressable>
          <Text style={{fontSize: 22, fontWeight: '400', color:'white', marginTop: 13, marginLeft: 10, }}>Sury</Text>
          
          <Pressable onPress={() => navigation.navigate('Call')}>
             <FontAwesome name="phone" size={24} color="white" style={{marginTop: 15, marginLeft: 190}}/>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('CallVideo')}>
             <FontAwesome name="video-camera" size={22} color="white" style={{marginTop: 15, marginLeft: 15}}/>         
          </Pressable>

          <Pressable onPress={() => navigation.navigate('')}>
            <Entypo name="text" size={24} color="white" style={{marginTop: 15, marginLeft: 15}}/>
          </Pressable>

         
         
      </View>
      <View style={{height: 535, backgroundColor:'#D7CFCF'}}></View>

      <View style={{flexDirection:'row'}}>
        <Image source={require('../Image/hinh8.png')} style={{width: 25, height:25, marginLeft: 10, marginTop: 17}}></Image>
        <TextInput placeholder='Nhập tin nhắn' style={{fontSize: 18,borderWidth:'none', outlineStyle:'none', marginLeft: 15, marginTop:18, color: 'grey'}}></TextInput>
        <Foundation name="list" size={24} color="black" style={{marginTop: 18, marginLeft: 30}}/>
        <FontAwesome name="microphone" size={24} color="black" style={{marginTop: 18, marginLeft: 10}}/>
        <FontAwesome5 name="images" size={24} color="black" style={{marginTop: 18, marginLeft: 10}} />

      </View>
    </View>
      
  );
}


