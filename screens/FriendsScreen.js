import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React, {
  useEffect,
  useContext,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import axios from "axios";
import { UserType } from "../UserContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import User from "../components/User";
import { ScreenStackHeaderRightView } from "react-native-screens";

const FriendsScreen = () => {
  const navigation = useNavigation();
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState([]);
  const scrollViewRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 15 }}>
          Friends
        </Text>
      ),

      headerRight: () => (
        <View>
          <MaterialCommunityIcons
            onPress={() => navigation.navigate("ChatGroup")}
            name="account-multiple-plus-outline"
            size={32}
            color="pink"
            style={{ marginRight: 15 }}
          />
        </View>
      ),
    });
  }, []);

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

  useEffect(() => {
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserId(userId);

      axios
        .get(`http://localhost:8000/users/${userId}`)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log("error retrieving users", error);
        });
    };

    fetchUsers();
  }, []);

  console.log("users", users);
  return (
    <View>
      <View style={{ padding: 10 }}>
        {users.map((item, index) => (
          <User key={index} item={item} />
        ))}
      </View>
      <View style={{flex: 1}}>
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
    </View>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({});
