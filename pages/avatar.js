import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import avatar7 from "../assets/avatar-7.png";
import avatar8 from "../assets/avatar-8.png";
import avatar9 from "../assets/avatar-9.png";
import avatar10 from "../assets/avatar-10.png";
import avatar11 from "../assets/avatar-11.png";
import avatar12 from "../assets/avatar-12.png";
import logo from "../assets/logo-sm.png";

export default function Avatar({ navigation }) {
  const [selectedAvatar, setSelectedAvatar] = useState(avatar12);
  const avatars = [
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar10,
    avatar11,
  ];

  return (
    <>
      {/* {loading ? <Text>Creating user</Text> : null} */}
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Image source={logo} style={styles.logo} />
          </View>
          <Text style={styles.HeaderText}>Select your avatar</Text>
          <Text
            style={{ paddingVertical: 10, fontSize: 14, textAlign: "left" }}
          >
            Enter basic informations about yourself to help us get to know you
            better.
          </Text>
          <View style={{ margin: 20, alignItems: "center" }}>
            <Image
              source={selectedAvatar}
              style={{ width: 180, height: 180 }}
            />
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {avatars.map((avatar) => (
              <View style={{ width: "30%" }} key={avatar}>
                <Image
                  source={avatar}
                  onPress={() => {
                    setSelectedAvatar(avatar);
                  }}
                />
              </View>
            ))}
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("home");
              }}
              style={styles.buttonContainer}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                Create account
              </Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "90%",
    backgroundColor: "rgba(0, 128,128,255)",
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 18,
    width: "100%",
    // fontSize: 6,
  },
  container: {
    // alignItems: "center",
    height: "100%",
    paddingHorizontal: 20,
  },
  loader: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  safeview: {
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  checkbox: {
    width: 16,
    height: 16,
  },
  search: {
    alignSelf: "flex-end",
    width: 50,
    height: 50,
    paddingRight: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#c5c5c5",
    borderRadius: 6,
    padding: 12,
    width: "100%",
    marginBottom: 6,
    // alignSelf: "center",
  },
  HeaderText: {
    // color: "#411465",
    textAlign: "left",
    // fontFamily: "Inter",
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: -0.025,
    paddingVertical: 3,
  },
  logo: {
    marginVertical: 5,
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "90%",
    backgroundColor: "rgba(0, 128,128,255)",
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 18,
    width: "100%",
    // fontSize: 6,
  },
  form: {
    flexDirection: "column",
    width: "100%",
    paddingVertical: 18,
    gap: 15,
    justifyContent: "space-between",
  },
  forgotcontainer: {
    flexDirection: "row",
    gap: 10,
    paddingBottom: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgotText: {
    color: "#411465",
  },
  SignupText: {
    color: "#411465",
    fontWeight: 600,
    textDecorationLine: "underline",
  },
  whiteText: {
    alignSelf: "center",
    color: "#fff",
  },
  bodyText: {
    fontSize: 13,
    alignSelf: "center",
  },
  subHeadText: {
    fontSize: 15,
    // textAlign: "center",
    fontWeight: "bold",
  },
});
