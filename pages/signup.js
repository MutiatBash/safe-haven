import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Alert,
  TextInput,
  ScrollView,
  View,
  Button,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
import { AuthContext } from "../authContext.js";
// import { auth} from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useContext, useCallback, useEffect } from "react";
import logo from "../assets/logo-sm.png";

const DOUsername = require("do_username");

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { loading, setLoading, setUsername, error, setError } =
    useContext(AuthContext);
  const username = DOUsername.generate();

  // const handleSignup = async () => {
  //   if (!email.trim() || !password.trim() || !username.trim()) {
  //     setError("All fields are required");
  //   } else {
  //     setError("");
  //   }

  //   try {
  //     const response = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     navigation.navigate("Login");
  //     console.log("registered:", email);
  //     //   alert("Account has been created ");
  //     setLoading(true);
  //   } catch (error) {
  //     if (error.code === "auth/email-already-in-use") {
  //       Alert.alert(
  //         "Error",
  //         "Email is already in use. Please use a different email."
  //       );
  //     } else if (error.code === "auth/weak-password") {
  //       setError("Password should be at least 6 characters.");
  //     }
  //     console.log(error.message);
  //     //   alert(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      {/* {loading ? <Text>Creating user</Text> : null} */}
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.HeaderText}>Create a new account</Text>
          <Text
            style={{ paddingVertical: 10, fontSize: 14, textAlign: "left" }}
          >
            Enter basic information about yourself to help us get to know you
            better.
          </Text>
          <View style={styles.form}>
            <View>
              <Text style={{ paddingBottom: 10 }}>Full Name</Text>
              <TextInput
                inputMode="text"
                style={styles.input}
                value={fullName}
                onChangeText={(text) => setFullName(text)}
              />
            </View>
            <View>
              <Text style={{ paddingBottom: 10 }}>Username</Text>
              <TextInput
                inputMode="text"
                style={styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)}
                editable={false}
              />
            </View>
            <View>
              <Text style={{ paddingBottom: 10 }}>Email Address</Text>
              <TextInput
                inputMode="email"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View>
              <Text style={{ paddingBottom: 10 }}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View>
              <Text style={{ paddingBottom: 10 }}> Confirm Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                // value={password}
                // onChangeText={(text) => setPassword(text)}
              />
            </View>
            {/* <Text style={{ color: "#dc143c", fontSize: 13 }}>{error}</Text> */}
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("avatar");
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

          <View>
            <Text style={{ fontSize: 10.5, paddingVertical: 8 }}>
              By signing up, you agree to safehaven's {""}
              <Text
                style={{
                  color: "rgba(0, 128,128,255)",
                  textDecorationLine: "underline",
                }}
              >
                Privacy Policy {""}
              </Text>
              and {""}
              <Text
                style={{
                  color: "rgba(0, 128,128,255)",
                  textDecorationLine: "underline",
                }}
              >
                Terms
              </Text>
            </Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
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
