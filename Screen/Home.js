import {Text, View, Image, Pressable } from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={{backgroundColor:'#EFB0C9', flex: 1}}>
      <View /*Header*/ style={{backgroundColor:'#EFB0C9'}}>
        <Text style={{fontSize: 50, fontWeight: '500', color:'#770781', marginTop: 20, marginLeft: 120, }}>WeAlo</Text>
        <Image source={require('../Image/hinh6.png')} style={{width: 300, height: 300, marginLeft: 45, marginTop: 20}}/>
      </View>

      <View /*Center*/>
        <Pressable
          onPress={() => navigation.navigate('SignIn')}
          style={{ width: 220, height: 45, borderRadius: 20, backgroundColor: '#D37289', marginLeft: 80, marginTop: 20}}
        >
            <Text style={{fontSize: 22, fontWeight: '500', color:'black', marginTop: 5, marginLeft: 55,}}>Đăng nhập</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SignUp')}
          style={{ width: 220, height: 45, borderRadius: 20, backgroundColor: '#D37289', marginLeft: 80, marginTop: 20}}
        >
            <Text style={{fontSize: 22, fontWeight: '500', color:'black', marginTop: 5, marginLeft: 65,}}>Đăng ký</Text>
        </Pressable>
      </View>

      <View /*Footder*/ style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{fontSize: 20, fontWeight: '450', color:'black', marginLeft: 70,}}>Tiếng Việt</Text>
        <Text style={{fontSize: 20, fontWeight: '450', color:'grey', marginLeft: 70,}}>English</Text>
      </View>
    </View>
  );
}


