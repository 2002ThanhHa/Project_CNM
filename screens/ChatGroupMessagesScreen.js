import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import React, { useContext, useEffect, useState, useRef } from "react";
import { Entypo } from "@expo/vector-icons";

const ChatGroupMessagesScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Entypo
          name="camera"
          size={32}
          color="pink"
          style={{ marginLeft: 20 }}
        />

        <TextInput
          placeholder="Nhập tên nhóm"
          style={{
            marginLeft: 10,
            fontSize: 18,
            borderBottomColor: "gray",
            borderBottomWidth: 1,

            width: 300,
            outlineStyle: "none",
          }}
        />
      </View>

      <ScrollView>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
         Chọn thành viên thêm vào nhóm
        </Text>
      </ScrollView>

      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={{
            width: 150,
            backgroundColor: "#D37289",
            padding: 15,
            marginTop: 30,
            marginLeft: 30,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Hủy
          </Text>
        </Pressable>

        <Pressable
          style={{
            width: 150,
            backgroundColor: "#D37289",
            padding: 15,
            marginTop: 30,
            marginLeft: 30,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Tạo Nhóm
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChatGroupMessagesScreen;

const styles = StyleSheet.create({});
