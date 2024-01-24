import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUp() {
  return (
    <View style={{backgroundColor:'white', flex: 1}}>
      <View /*Header*/ style={{backgroundColor:'#EFB0C9', height: 60, flexDirection:'row'}}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <AntDesign name="left" size={22} color="white" style={{marginTop: 18, marginLeft: 10}} />
        </Pressable>
        <Text style={{fontSize: 22, fontWeight: '400', color:'white', marginTop: 13, marginLeft: 10, }}>Tạo tài khoản</Text>
        
      </View>

      <View /*Center*/>
        <Text style={{fontSize: 22, fontWeight: '550', color:'black', marginTop: 13, marginLeft: 10,}}>Tên WeAlo</Text>
        <TextInput placeholder='Còn 2-40 ký tự' style={{fontSize: 17,borderWidth:'none', outlineStyle:'none', marginLeft: 15, marginTop:8, color: 'grey'}}></TextInput>
        <View style={{borderEndWidth: 2, backgroundColor:'grey', height: 1, marginTop: 5}}></View>
        <Text style={{fontSize: 16, fontWeight: '400', color:'black', marginTop: 13, marginLeft: 15,}}>Lưu ý khi đặt tên</Text>
        
        <View style={{flexDirection: 'row', marginTop: 8}}>
          <FontAwesome name="circle" size={13} color="black" style={{marginTop: 5, marginLeft: 15}} />
          <Text style={{fontSize: 16, fontWeight: '400', color:'black', marginLeft: 10,}}>Không vi phạm <a style={{color:'#1FAEEB'}}>Quy định đặt tên trên Zalo</a></Text>       
        </View>

        <View style={{flexDirection: 'row', marginTop: 8}}>
          <FontAwesome name="circle" size={13} color="black" style={{marginTop: 5, marginLeft: 15}} />
          <Text style={{fontSize: 16, fontWeight: '400', color:'black', marginLeft: 10,}}>Nên sử dụng tên thật giúp bạn bè dễ nhận ra bạn</Text>  
        </View>
      
      </View>
      <View /*Footder*/ style={{flexDirection:'row', marginTop: 370}}>
        <Text style={{fontSize: 16, fontWeight: '400', color:'black', marginLeft: 10, }}>
              Tiếp tục nghĩa là bạn đồng ý với các 
              <p style={{color:'#1FAEEB', marginTop: -1}}>điều khoản sử dụng Zalo</p>
        </Text>
        <Pressable
            onPress={() => navigation.navigate('SignUp2')}
        >
            <FontAwesome name="arrow-circle-right" size={28} color="#1FAEEB" style={{marginLeft: 80, marginTop: 8}} />
        </Pressable>
      </View>
    </View>
  );
}


