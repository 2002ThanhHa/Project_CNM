import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUp2({navigation, route}) {
  return (
    <View style={{backgroundColor:'white', flex: 1}}>
        <View /*Header*/ style={{backgroundColor:'#EFB0C9', height: 60, flexDirection:'row'}}>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
                <AntDesign name="left" size={22} color="white" style={{marginTop: 18, marginLeft: 10}} />
            </Pressable>
            
            <Text style={{fontSize: 22, fontWeight: '400', color:'white', marginTop: 13, marginLeft: 10, }}>Tạo tài khoản</Text>      
        </View>
        <View>
            <View style={{height: 25, backgroundColor: '#D9D9D9'}}>
                <Text style={{fontSize: 16, fontWeight: '500', color:'black', marginLeft: 10}}>Nhập số điện thoại của bạn để tạo tài khoản mới </Text>
            </View>
            <View style={{flexDirection:'row', marginTop: 14}}>
                <View>
                    <View style={{flexDirection:'row', marginTop: 10 }}>
                        <Text style={{fontSize: 18, fontWeight: '400', color:'black', marginLeft: 15}}>VN</Text>
                        <AntDesign name="down" size={16} color="black" style={{marginTop:2, marginLeft: 5}}/>                   
                </View>  
                    <View style={{height: 2, backgroundColor:'grey', width: 50, marginLeft: 10, marginTop: 5}}></View>
                </View>
                            
               <View>
                    <TextInput placeholder='Số điện thoại' keyboardType='numeric' style={{fontSize: 18,borderWidth:'none', outlineStyle:'none', marginLeft: 15, marginTop:8, color: 'grey'}}></TextInput>
                    <View style={{height: 2, backgroundColor:'#1FAEEB', width: 300, marginLeft: 10, marginTop: 7}}></View>
               </View>

                
            </View>
        </View>

        <View /*Footder*/ style={{flexDirection:'row', marginTop: 470}}>
            <Text style={{fontSize: 16, fontWeight: '400', color:'black', marginLeft: 10, }}>
                Tiếp tục nghĩa là bạn đồng ý với các 
                <p style={{color:'#1FAEEB', marginTop: -1}}>điều khoản sử dụng Zalo</p>
            </Text>
            <Pressable
                onPress={() => navigation.navigate('Home')}
            >
                <FontAwesome name="arrow-circle-right" size={28} color="#1FAEEB" style={{marginLeft: 80, marginTop: 8}} />
            </Pressable> 
      </View>
       

    </View>
  );
}


