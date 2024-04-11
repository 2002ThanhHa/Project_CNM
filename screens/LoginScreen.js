import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Home");
        } else {
          // token not found , show the login screen itself
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    checkLoginStatus();
  }, []);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);

        navigation.replace("Home");
      })
      .catch((error) => {
        // Alert.
        alert("Login Error", "Invalid email or password");
        console.log("Login Error", error);
      });
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            backgroundColor: "#efb0c9",
            padding: 10,
            height: 50,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Wellcome")}
            style={{ flexDirection: "row" }}
          >
            <AntDesign name="left" size={28} color="white" />
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                fontWeight: "600",
                paddingLeft: 10,
              }}
            >
              Đăng nhập
            </Text>
          </Pressable>
        </View>

        <View style={{ marginTop: 50, paddingLeft: 40 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor={"black"}
              placeholder="Nhập email của bạn"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor={"black"}
              placeholder="Nhập mật khẩu của bạn"
            />
          </View>
          <Text style={{ color: "blue", marginTop: 10 }}> Quên mật khẩu</Text>
          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "#D37289",
              padding: 15,
              marginTop: 50,
              marginLeft: 50,
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Đăng Nhập
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Bạn đã có tài khoản ? Đăng ký
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
