import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function Call() {
  return (
      <View style={{backgroundColor:'#EFB0C9', flex: 1}}>
        <View style={{flexDirection:'row'}}>
          <AntDesign name="leftcircle" size={28} color="#A19D9D" style={{marginLeft: 10, marginTop: 10}}/>
          <Text style={{marginLeft: 10, marginTop: 10, fontSize: 20, color: 'white', marginLeft: 130, fontWeight: '500'}}>Zalo</Text>
          <Image source={require('../Image/Video_call.png')} style={{marginLeft: 10, marginTop: 10, width: 28, height:28, marginLeft: 140}}></Image>
        </View>

        <View style={{marginTop: 40, marginLeft: 85}}>
          <View style={{marginLeft: 10, marginTop: 10, width: 200, height:200,  backgroundColor:'#1467E3'}}>
            <View style={{marginLeft: 10, marginTop: 25, width: 150, height:150, marginLeft: 23, borderRadius: 80, backgroundColor:'#45A0F4'}}>
              <Image source={require('../Image/girl.png')} style={{marginLeft: 25, marginTop: 23, width: 100, height:100, borderRadius: 50}}></Image>
            </View>
          </View>
          
          <Text style={{marginTop: -30, fontSize: 20, color: 'white', marginLeft: 88, fontWeight: '500'}}>Sury</Text>
          <Text style={{marginTop: 10, fontSize: 20, color: 'white', marginLeft: 40, fontWeight: '500'}}>Đang đổ chuông</Text>
        </View>

        <View style={{flexDirection:'row', marginLeft: 30 , marginTop: 180}}>
          <View>
            <Image source={require('../Image/loudspeaker.png')} style={{width: 50, height:50, marginLeft: 15}}></Image>
            <Text style={{marginTop: 10, fontSize: 20, color: 'white', marginLeft: 20, fontWeight: '500'}}>Loa</Text>
          </View>

          <View>
            <Image source={require('../Image/call.png')} style={{marginLeft: 90, width: 50, height:50}}></Image>
            <Text style={{marginTop: 10, fontSize: 20, color: 'white', marginLeft: 80, fontWeight: '500'}}>Kết thúc</Text>
          </View>

          <View>
            <Ionicons name="mic-circle-sharp" size={60} color="#A19D9D" style={{marginLeft: 50, marginTop: -5}}/>
            <Text style={{marginTop: 0, fontSize: 20, color: 'white', marginLeft: 70, fontWeight: '500'}}>Mic</Text>
          </View>
        </View>
      </View>
  );
}


