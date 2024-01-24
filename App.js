import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './Screen/SignUp';
import Home from './Screen/Home';
import Information from './Screen/Information';
import Chat from './Screen/Chat';
import Call from './Screen/Call';
import Diary from './Screen/Diary';
import SignUp2 from './Screen/SignUp2';
import SignUp3 from './Screen/SignUp3';



export default function App() {
  return (
    //<SignUp/>
    //<SignUp2/>
    //<SignUp3/>
    //<Home/>
    //<Information/>
    //<Call/>
    //<Diary/>
    <Chat/>
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
