import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Pressable,TextInput} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

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
  const[dataSelect, setDataSelect] = useState(select);
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
     
      <FlatList
        numColumns={3}
          data={select}
            renderItem={({item})=>{
                return(
                  <View style={{marginTop: 15}}>
                      <View style={{flexDirection: 'row', width: 150, height: 30, backgroundColor: '#d8d8d8', marginRight: 5, borderRadius:5}}>
                        <Image source={item.img} style={{width: 20, height: 20, marginLeft: 8, marginTop:6}}/>
                        <Text style={{fontSize: 16, marginLeft: 10, marginTop:5, fontWeight:'500'}}>{item.name}</Text>
                        <Text style={{fontSize: 16, marginTop: 5, marginLeft: 5 }}>{item.number}</Text>
                      </View>
                  </View>                        
                )
                }}

     ></FlatList>
    
    <View style={{width: 360, height: 40, backgroundColor:'#d9d9d9', borderRadius: 10, marginTop: 20, marginLeft: 15, flexDirection:'row' }}>
      <TextInput placeholder='Bạn đang nghỉ gì?' style={styles.textInput}/>
      <Ionicons name="image" size={30} color="#c3f550" style={styles.icon}/>

    </View>
   
     

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
    fontSize: 16, 
    fontWeight:'450',
    color:'blue',
    marginLeft: 80, 
    marginTop: 5,

  },
  textInput:{
    width: 300,
    height: 40,
    marginLeft: 15,
    outlineStyle:'none',
    fontSize: 16
  },
  icon:{
    marginTop:5,
    fontWeight:'500'

  }


});

export default Information;