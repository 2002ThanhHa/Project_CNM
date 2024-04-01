import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList,Pressable} from 'react-native';
import { useState } from 'react';

const select = [
  {
    img: require('../Image/image.png'),
    name: 'Ảnh của tôi',
    number: '10',
  },

  {
    img: require('../Image/video.png'),
    name: 'Video của tôi',
    number: '0',
  },

  {
    img: require('../Image/heart.png'),
    name: 'Yêu thích nhất',
    number: '0',
  },
  
  {
    img: require('../Image/box.png'),
    name: 'Kho khoảnh khắc',
    number: '0',
  },

  {
    img: require('../Image/rotate_clock.png'),
    name: 'Kỹ niệm năm xưa',
    number: '0',
  },
]



const Information =()=> {
  return (
    <View style={styles.container}>
      <View>
        <Pressable>

        </Pressable>

        <Pressable></Pressable>

        <Pressable></Pressable>

      </View>

      <Image source={require('../Image/phongcanh.png')} style={styles.img}/>
      <View style={styles.view_img}>
        <Image source={require('../Image/sam.jpg')} style={styles.img_avata}/>
      </View>
      
      <Text style={styles.text_name}>Amelinda</Text>
      <View>
        <Pressable  onPress={() => navigation.navigate('')}>
          <Text style={styles.text_gt}>Cập nhật giới thiệu bản thân</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  view_img:{
    height:140,
    width: 140,
    backgroundColor:'white',
    borderRadius: 80,
    marginLeft: 120,
    marginTop: -70
  },

  img:{
    width: 400,
    height: 200,
  },

  img_avata:{
    flexDirection: 'row',
    height: 130,
    width: 130,
    borderRadius: 80,
    // alignItems:'center',
    // justifyContent:'center'
    marginLeft: 5,
    marginTop: 5
  },
  text_name:{
    fontSize: 30, 
    fontWeight:500, 
    marginLeft: 130, 
    marginTop: 5,
  },

  text_gt:{
    fontSize: 20, 
    fontWeight:'450',
    color:'blue',
    marginLeft: 80, 
    marginTop: 5,

  },


});

export default Information;