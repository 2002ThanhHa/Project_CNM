import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#efb0c9",
          flexDirection: "row",
          paddingLeft: 10,
          height: 50,
          alignItems: "center",
        }}
      >
        <AntDesign name="left" size={24} color="white" />
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "600",
            paddingLeft: 10,
          }}
        >
          Đăng nhập
        </Text>
      </View>
      <View style={{ backgroundColor: "#d8d8d8", alignItems: "center" }}>
        <Text style={{ fontWeight: "700" }}>
          {" "}
          Vui lòng nhập số điện thoại và mật khẩu đăng nhập
        </Text>
      </View>

      <Pressable><Text>Login</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
