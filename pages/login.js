import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
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
// import { LinearGradient } from "expo-linear-gradient";
// import { AuthContext } from "../authContext.js";
// import { auth} from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useContext, useCallback, useEffect } from "react";
// import { auth } from "../firebase";

export default function Login({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, setLoading } = useContext(AuthContext);

  
  // const handleLogin = async () => {
  //   setLoading(true);
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     navigation.navigate("Home");
  //     console.log("registered:", email);
  //     alert("You are logged in");
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //       // navigation.navigate("Home");
  //       console.log(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <Image style={styles.logo} />
          <Text style={styles.HeaderText}>WELCOME BACK TO WORDSMITH</Text>
          <View style={styles.form}>
            <View>
              <Text style={{ paddingVertical: 2 }}>Email Address</Text>
              <TextInput
                inputMode="email"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View>
              <Text style={{ paddingVertical: 2 }}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={styles.forgotcontainer}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <CheckBox
                  value={isChecked}
                  onValueChange={setChecked}
                  style={styles.checkbox}
                  color={isChecked ? "#411465" : null}
                />
                <Text>Remember Me</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#806298", "#411465", "#806298"]}
            style={styles.buttoncontainer}
          > */}
            <TouchableOpacity style={styles.button}>
              <Button title="Login" color="#fff"  />
            </TouchableOpacity>
          {/* </LinearGradient> */}
          <View style={styles.Signupcontainer}>
            <Text> Or Continue With</Text>
            <TouchableOpacity>
              <Image />
            </TouchableOpacity>
            <View style={styles.forgotcontainer}>
              <Text>New to Wordsmith?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.SignupText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
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
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    // alignSelf: "center",
  },
  HeaderText: {
    color: "#411465",
    textAlign: "center",
    // fontFamily: "Inter",
    fontSize: 21,
    fontWeight: 600,
    letterSpacing: -0.025,
    paddingVertical: 3,
  },
  logo: {
    marginVertical: 10,
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  buttoncontainer: {
    width: "90%",
    borderRadius: 8,
    marginBottom: 18,
    marginTop: 45,
    fontSize: 6,
  },
  button: {
    display: "flex",
    // backgroundColor: "#411465",
    // background: radial-gradient("387.30%" "66.49%" at "42.68%" "-0.00%," "#411465" "0%", "#806298" "100%"),
    textAlign: "center",
    borderRadius: 8,
    paddingVertical: 7,
    fontSize: 6,
    paddingHorizontal: 30,
  },
  form: {
    flexDirection: "column",
    // alignItems: "center",
    width: "90%",
    paddingVertical: 20,
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
  Signupcontainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    // width: 300,
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
