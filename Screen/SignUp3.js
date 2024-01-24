import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SignUp3() {
  return (
    <View style={{backgroundColor:'white', flex: 1}}>
        <View /*Header*/ style={{backgroundColor:'#EFB0C9', height: 60, flexDirection:'row'}}>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
                <AntDesign name="left" size={22} color="white" style={{marginTop: 18, marginLeft: 10}} />
            </Pressable>
            
            <Text style={{fontSize: 22, fontWeight: '400', color:'white', marginTop: 13, marginLeft: 10, }}>Kích hoạt tài khoản</Text>      
        </View>

        <View style={{height: 25, backgroundColor: '#D9D9D9'}}>
            <Text style={{fontSize: 14, fontWeight: '400', color:'black', marginLeft: 15, marginTop: 1}}>Vui lòng không chia sẻ mã xác thực để tránh mất tài khoản </Text>
        </View>
        
        <View /*Center*/ style={{marginTop: 150}}>
            <Text style={{fontSize: 18, fontWeight: '500', color:'black', marginLeft: 40,}}>Đang gọi đến số (+84) XXX XXX XXX</Text>
            <Text style={{fontSize: 16, fontWeight: '400', color:'black', marginLeft: 80,}}>Vui lòng bắt máy để nghe mã</Text>

            <View style={{flexDirection:'row',marginTop: 40, marginLeft: 80}}>
                <View style={{height: 1, backgroundColor:'black', width: 45,}}/>
                <View style={{height: 1, backgroundColor:'black', width: 45, marginLeft: 10, }}/>
                <View style={{height: 1, backgroundColor:'black', width: 45, marginLeft: 10, }}/>
                <View style={{height: 1, backgroundColor:'black', width: 45, marginLeft: 10, }}/>
            </View>

            <Text style={{fontSize: 16, fontWeight: '500', color:'black', marginLeft: 125, marginTop: 30}}>Gửi lại mã <a style={{color:'#1FAEEB', marginLeft: 7}}>00:25</a></Text>
        </View>

        <View /*Footder*/ style={{marginTop: 50, marginLeft: 100}}>
            <Pressable            
                //onPress={() => navigation.navigate('')}
                style={{width: 170, height: 40, backgroundColor:'#D37289',borderRadius: 20}}
            >
                <Text style={{fontSize: 18, fontWeight: '500', color:'black', marginLeft: 50, marginTop: 7}}>Tiếp tục</Text>
            </Pressable>
        </View>
    </View>
        
  );
}


