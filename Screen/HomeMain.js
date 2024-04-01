import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeMain(navigation) {
  return (
    <View style={styles.container}>
      <Text>Hoem main</Text>
      <StatusBar style="auto" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFB0C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
