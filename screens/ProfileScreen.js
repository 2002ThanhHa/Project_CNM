import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React, {
  useLayoutEffect,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { UserType } from "../UserContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const navigation = useNavigation();
  const scrollViewRef = useRef();

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const handleContentSizeChange = () => {
    scrollToBottom();
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleLogout = async () => {
    // Clear the authentication token from AsyncStorage
    await AsyncStorage.removeItem("authToken");

    // Clear the user ID in the context
    setUserId(null);

    // Navigate to the login screen
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{height:150, borderWidth: 1, borderColor:'grey'}}>

      </View>
      <Button title="Logout" onPress={handleLogout} />
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
        onContentSizeChange={handleContentSizeChange}
        style={{ height: 60, marginTop: 10 }}
      >
        <View style={{ flexDirection: "row", gap: 50 }}>
          <Ionicons
            onPress={() => navigation.navigate("Chats")}
            name="chatbox-ellipses-outline"
            size={40}
            color="pink"
            style={{ marginTop: 15, marginLeft: 40 }}
          />
          <MaterialIcons
            onPress={() => navigation.navigate("Friends")}
            name="people-outline"
            size={40}
            color="pink"
            style={{ marginTop: 15 }}
          />

          <Feather
            onPress={() => navigation.navigate("Notification")}
            name="bell"
            size={35}
            color="pink"
            style={{ marginTop: 15 }}
          />

          <MaterialCommunityIcons
            onPress={() => navigation.navigate("Profile")}
            name="account"
            size={40}
            color="pink"
            style={{ marginTop: 10 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
