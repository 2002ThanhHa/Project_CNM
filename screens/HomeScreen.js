import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useContext, useEffect, useState, useRef } from "react";
import { UserType } from "../UserContext";
import { useNavigation } from "@react-navigation/native";
import UserChat from "../components/UserChat";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  const [acceptedFriends, setAcceptedFriends] = useState([]);
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

  useEffect(() => {
    const acceptedFriendsList = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/accepted-friends/${userId}`
        );
        const data = await response.json();

        if (response.ok) {
          setAcceptedFriends(data);
        }
      } catch (error) {
        console.log("error showing the accepted friends", error);
      }
    };

    acceptedFriendsList();
  }, []);

  console.log("friends", acceptedFriends);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable>
          {acceptedFriends.map((item, index) => (
            <UserChat key={index} item={item} />
          ))}
        </Pressable>
      </ScrollView>
      
      <View>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
          onContentSizeChange={handleContentSizeChange}
          style={{ height: 60, marginTop: 10 }}
        >
          <View style={{ flexDirection: "row", gap: 50 }}>
            <Ionicons
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

export default HomeScreen;

const styles = StyleSheet.create({});
