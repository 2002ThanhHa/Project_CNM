import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView, FlatList, Image,_ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';

const action=[
  {
    img: require('../Image/bst.png'),
    name: 'Đăng ảnh',
  },
  {
    img: require('../Image/camera.png'),
    name: 'Đăng video',
  },
  {
    img: require('../Image/book.png'),
    name: 'Tạo album ',
  },
]

const story=[
  {
    img: require('../Image/sam.jpg'),
    name: '',
  },
]

const srticles=[
  {
    img_avata: require('../Image/girl.png'),
    name: 'Sury',
    time:'Thứ 3 lúc 15:16',
    derec: 'Cuộc sống dù thế nào đi nữa cũng phải tinh khôi và nhẹ nhàng như những đoá hoa sen.',
    img: require('../Image/dongsen.png'),
    number1: '40',
    number2:'15',
  },

  {
    img_avata: require('../Image/boy.png'),
    name: 'Fergus',
    time:'Thứ 3 lúc 20:39',
    derec: 'Khi tôi cầm đàn guitar, thế giới xung quanh tan biến, chỉ còn lại âm nhạc và tôi.',
    img: require('../Image/guitar.jpg'),
    number1: '150',
    number2:'78',
  },
]


export default function Diary() {
  const[dataAction, setDataAction] = useState(action);
  const[dataStory, setDataStory] = useState(story);
  const[dataSrticles, setDataSrticles] = useState(srticles);



  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1, backgroundColor:'white',}}>
        <View /*Header*/ style={{backgroundColor:'#EFB0C9', height: 60, flexDirection:'row'}}>
          <Pressable onPress={() => navigation.navigate('Search')} style={{flexDirection:'row'}}>
            <FontAwesome5 name="search" size={24} color="white" style={{marginTop: 15, marginLeft: 10}}/>
            <Text style={{fontSize: 22, fontWeight: '400', color:'white', marginTop: 13, marginLeft: 10, }}>Tìm kiếm</Text>
          </Pressable>
                            
          <Ionicons name="image-outline" size={28} color="white" style={{marginTop: 15, marginLeft: 170}}/>
          <SimpleLineIcons name="bell" size={28} color="white" style={{marginTop: 15, marginLeft: 15}}/>
        </View>
          
        <View /*Center*/ >
          <View style={{height: 250, color:'grey', marginTop: 15, marginLeft: 15}}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../Image/sam.jpg')} style={{width: 65, height: 65, borderRadius: 50}}></Image>
              <Pressable>
                <Text style={{fontSize: 16, color: 'grey', marginLeft: 20, marginTop: 20}}>Hôm nay, bạn thế nào?</Text>
              </Pressable>
            
            </View>

            <View>
              <FlatList
                numColumns={3}
                  data={action}
                      renderItem={({item})=>{
                          return(
                            <View style={{marginTop: 15}}>
                                <View style={{width: 110, height: 30, backgroundColor:'#D9D9D9', marginLeft: 10, borderRadius: 8, flexDirection: 'row'}}>
                                  <Image source={item.img} style={{width: 17, height: 17, marginLeft: 8, marginTop:5}}/>
                                  <Text style={{fontSize: 12, marginLeft: 5, marginTop:5, fontWeight:'500'}}>{item.name}</Text>
                                </View>
                            </View>                        
                          )
                          }}

              ></FlatList>
            </View>
          </View>

          <View style={{marginLeft: 15, marginTop: -100}}>
            <FlatList
            numColumns={3}
                  data={story}
                      renderItem={({item})=>{
                          return(
                            <View >
                              <Text Text style={{fontSize: 12, marginTop:5, fontWeight:'500'}}>Khoảnh khắc</Text>
                              <View>
                                <Image source={item.img} style={{width: 100, height: 160, marginTop:5, borderRadius: 15}}>                       
                                </Image>

                                <FontAwesome name="circle" size={50} color="#0C71E8" style={{marginLeft: 25, marginTop: -70}}/>
                                <FontAwesome name="video-camera" size={22} color="white" style={{marginTop: -35, marginLeft: 35}}/>
                                        
                                <Text style={{fontSize: 12, marginLeft: 25, marginTop:15, fontWeight:'500', color:'White'}}>Tạo mới</Text>
                              </View>
                            </View>
                          )}}
            >
            </FlatList>
          </View>
          <View>
            <FlatList 
              
              data={srticles}
                renderItem={({item})=>{
                  return(
                    <View style={{marginTop: 30, marginLeft: 20}}>
                      <View>
                        <View style={{flexDirection:'row'}}>
                          <Image  source={item.img_avata} style={{width: 65, height: 65, borderRadius: 50, resizeMode:'stretch'}}></Image>
                          <View style={{flexDirection:'row'}}>
                            <View>
                              <Text style={{fontSize: 18, fontWeight:'600', marginLeft: 20}}>{item.name}</Text>
                              <Text style={{fontSize: 16, fontWeight:'400', marginLeft: 20}}>{item.time}</Text>
                            </View>
                            <Entypo name="dots-three-horizontal" size={20} color="grey"  style={{marginLeft: 130, marginTop: 10}}/>
                          </View>
                        </View>
                      </View>
                      <Text style={{fontSize: 18, fontWeight:'400', marginTop: 15}}>{item.derec}</Text>
                      <Image source={item.img} style={{ width: 'auto',height: 200, marginTop:15,marginLeft: -20, resizeMode:'stretch'}}/> 
                      <View style={{flexDirection:'row'}}>
                        <View>
                          <AntDesign name="hearto" size={24} color="black" />
                          <Text>{item.number1}</Text>
                        </View>
                        <View>
                          <MaterialCommunityIcons name="comment-processing-outline" size={24} color="black" />
                          <Text>{item.number2}</Text>
                        </View>
                      
                      </View>
                    </View>
                  )}}
            >
                

            </FlatList>
          </View>
        </View>

                      
          <View /*Footder*/     
            style={{flex: 1,flexDirection:'row', marginTop: 50, marginLeft: 0, borderColor: "grey", borderTopWidth: 2, shadowRadius: -2}}
            >
              <View >
                <Pressable onPress={() => navigation.navigate('HomeMain')}>
                  <AntDesign name="message1" size={28} color="grey" style={{marginLeft: 16}}/>
                  <Text style={{fontSize: 15}}>Tin nhắn</Text>
                </Pressable>               
              </View>

              <View style={{marginLeft: 15}}>
                <Pressable onPress={() => navigation.navigate('Contacts')}>
                  <MaterialCommunityIcons name="account-box-outline" size={30} color="grey" style={{marginLeft: 13}}/>
                  <Text style={{fontSize: 15}}>Danh bạ</Text>
                </Pressable>                
              </View>

              <View style={{marginLeft: 15}}>
                <Pressable onPress={() => navigation.navigate('Discovery')}>
                  <SimpleLineIcons name="grid" size={28} color="grey" style={{marginLeft: 16}}/>
                  <Text style={{fontSize: 15}}>Khám phá</Text>
                </Pressable>                
              </View>

              <View style={{marginLeft: 15}}>
                <MaterialCommunityIcons name="clock-time-eight" size={31} color="#0C71E8" style={{marginLeft: 13}}/>
                <Text style={{fontSize: 15, color:'#0C71E8', fontWeight: 500}}>Nhật ký</Text>     
              </View>

              <View style={{marginLeft: 15}}>
                <Pressable onPress={() => navigation.navigate('HomeMain')}>
                  <MaterialCommunityIcons name="account" size={31} color="grey" style={{marginLeft: 13}}/>
                  <Text style={{fontSize: 15}}>Cá nhân</Text>
                </Pressable>                
              </View>

            </View>
          
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});




