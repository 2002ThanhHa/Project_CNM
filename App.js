import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './Screen/SignUp';
export default function App() {
  return (
    <SignUp/>
  //   <NavigationContainer>
  //   <stack.Navigator >
  //     <stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp}></stack.Screen> 
     
  //   </stack.Navigator>
  // </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
