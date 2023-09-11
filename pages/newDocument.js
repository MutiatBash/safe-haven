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
// import { AuthContext } from "../authContext.js";
// import { LinearGradient } from "expo-linear-gradient";
// import { FIREBASE_AUTH } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useContext, useCallback, useEffect } from "react";
// import * as

export default function NewDocument({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.HeaderText}>Document an incident</Text>
          <Text>
            Details of the incident should remain in a neutral tone stating only
            facts.
          </Text>

          {/* INCIDENT TYPE */}

          <View>
            <View>
              <Text> Are you seeking help for yourself</Text>
            </View>
            <View>
              <Text> Are you seeking help for a close friend</Text>
            </View>
          </View>

          {/* REPORT FORM */}
          <View style={styles.form}>
            <View>
              <Text style={{ paddingVertical: 2 }}>Title</Text>
              <TextInput inputMode="text" style={styles.input} />
            </View>
            <View>
              <Text style={{ paddingVertical: 2 }}>When did this happen?</Text>
              <TextInput inputMode="text" style={styles.input} />
            </View>
            <View>
              <Text style={{ paddingVertical: 2 }}>What happened?</Text>
              <TextInput inputMode="email" style={styles.input} />
            </View>
            <View>
              <Text>Add File </Text>
              <View></View>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Button title="Submit" color="#fff" />
          </TouchableOpacity>
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
    marginVertical: 5,
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  buttoncontainer: {
    width: "90%",
    borderRadius: 8,
    marginBottom: 18,
    marginTop: 25,
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
