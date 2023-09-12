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
// import { AuthContext } from "../authContext.js"
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useContext, useCallback, useEffect } from "react";

export default function Document({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>{"<"}</Text>
            <Text style={styles.headerText}>Document an incident</Text>
          </View>
          <View
            style={{ height: 1, width: "100%", backgroundColor: "#e5e8e8" }}
          ></View>

          {/* FOLDER DETAILS PAGE */}
          <View style={{ paddingHorizontal: 15, paddingVertical: 10, flex: 1 }}>
            <Text style={{ paddingVertical: 10 }}>All Folders</Text>

            {/* FOLDER TYPE */}

            <View style={styles.incidentType}>
              <View style={styles.incidents}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/png-icons/save-blue.png")}
                    style={{ width: 30, resizeMode: "contain" }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 13 }}>January 2023</Text>
              </View>
              <View style={styles.incidents}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/document-save-green.png")}
                    style={{ width: 30, resizeMode: "contain" }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 13 }}>Folder name</Text>
              </View>
            </View>

            {/* ADD ICON */}
            <View style={styles.add}>
              <TouchableOpacity>
                <Image source={require("../assets/png-icons/plus.png")} />
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
    height: "100%",
    // alignItems: "center",
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
  input: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#e5e8e8",
    padding: 12,
    width: "100%",
  },
  headerText: {
    fontSize: 16,
    fontWeight: 600,
    paddingLeft: 30,
    alignSelf: "flex-end",
    textAlign: "center",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    paddingHorizontal: 15,
    gap: 30,
    alignItems: "center",
  },
  form: {
    flexDirection: "column",
    paddingVertical: 20,
    gap: 15,
    justifyContent: "space-between",
  },
  add: {
    position: "fixed",
    bottom: 10,
    left: "80%",
  },
  incidents: {
    padding: 25,
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#e5e8e8",
    flexShrink: 1,
    width: "50%",
  },
  incidentType: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    gap: 10,
    justifyContent: "space-between",
  },
});
