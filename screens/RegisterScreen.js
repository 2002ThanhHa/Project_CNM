import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://localhost:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
        setImage("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
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
              Đăng ký
            </Text>
          </Pressable>
        </View>

        <View style={{ marginTop: 50, marginLeft: 40 }}>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Tên
            </Text>

            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              placeholderTextColor={"black"}
              placeholder="Nhập tên của bạn"
            />
          </View>

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
              placeholder="Nhập địa chỉ email của bạn"
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

          {
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                Ảnh đại diện
              </Text>

              <TextInput
                value={image}
                onChangeText={(text) => setImage(text)}
                style={{
                  fontSize: email ? 18 : 18,
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                  marginVertical: 10,
                  width: 300,
                }}
                placeholderTextColor={"black"}
                placeholder="Nhập link ảnh đại diện của bạn"
              />
            </View>
          }

          <Pressable
            onPress={handleRegister}
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
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Đăng ký
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Bạn đã có tài khoản ? Đăng nhập
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
