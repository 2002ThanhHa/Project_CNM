import {StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useEffect, useRef, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { UserType } from "../UserContext";
import FriendRequest from "../components/FriendRequest";

const NotificationScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [friendRequests, setFriendRequests] = useState([]);
  const navigation = useNavigation();
  const scrollViewRef = useRef();

  useEffect(() => {
    fetchFriendRequests();
  }, []);

  const fetchFriendRequests = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/friend-request/${userId}`
      );
      if (response.status === 200) {
        const friendRequestsData = response.data.map((friendRequest) => ({
          _id: friendRequest._id,
          name: friendRequest.name,
          email: friendRequest.email,
          image: friendRequest.image,
        }));

        setFriendRequests(friendRequestsData);
      }
    } catch (err) {
      console.log("error message", err);
    }
  };

  //
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

 console.log(friendRequests);
  return (
    <View style={{ flex: 1 }}>
      {friendRequests.length > 0 && <Text>Your Friend Requests!</Text>}

      {friendRequests.map((item, index) => (
        <FriendRequest
          key={index}
          item={item}
          friendRequests={friendRequests}
          setFriendRequests={setFriendRequests}
        />
      ))}
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

export default NotificationScreen;
const styles = StyleSheet.create({});
