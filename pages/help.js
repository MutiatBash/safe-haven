import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  View,
  Button,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { Navigation } from "./home";
// import Toast from "react-native-root-toast";
// import { ToastContainer } from "react-native-toast-message";
import { useState, useContext, useCallback, useEffect } from "react";
// import { auth } from "../firebase";

export default function Help({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.headerText}>Get Help</Text>
            <Text style={{ paddingVertical: 10, lineHeight: 20 }}>
              You can chat with a professional and your sessions are completely
              safe with us, you can also report an incident or document your
              incidents for safe keeping
            </Text>
          </View>

          {/* HELP SECTION */}
          {/* <SafeAreaView> */}
          <View style={styles.helps}>
            <View style={styles.help}>
              <View
                style={{
                  borderRadius: 8,
                  borderWidth: 0.5,
                  borderColor: "#e5e8e8",
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/document-save-green.png")}
                  style={{ width: 20, resizeMode: "contain" }}
                />
              </View>
              <View style={{ width: "70%" }}>
                <Text style={styles.helpText}>Chat with a professional</Text>
                <Text style={styles.smallerText}>
                  If you are feeling overwhelmed you can chat with us, you are
                  in a safe space
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ongoingChat");
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 600 }}> {">"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.help}>
              <View
                style={{
                  borderRadius: 8,
                  borderWidth: 0.5,
                  borderColor: "#e5e8e8",
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/document-save-green.png")}
                  style={{ width: 20, resizeMode: "contain" }}
                />
              </View>
              <View style={{ width: "70%" }}>
                <Text style={styles.helpText}>Report an incident</Text>
                <Text style={styles.smallerText}>
                  We're here to help and support you, Your safety is our top
                  priority
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("report");
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 600 }}> {">"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.help}>
              <View
                style={{
                  borderRadius: 8,
                  borderWidth: 0.5,
                  borderColor: "#e5e8e8",
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/document-save-green.png")}
                  style={{ width: 20, resizeMode: "contain" }}
                />
              </View>
              <View style={{ width: "70%" }}>
                <Text style={styles.helpText}>Document an incident</Text>
                <Text style={styles.smallerText}>
                  You can document an incident and it is safe on our platform
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("document");
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 600 }}> {">"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.help}>
              <View
                style={{
                  borderRadius: 8,
                  borderWidth: 0.5,
                  borderColor: "#e5e8e8",
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/document-save-green.png")}
                  style={{ width: 20, resizeMode: "contain" }}
                />
              </View>
              <View style={{ width: "70%" }}>
                <Text style={styles.helpText}>Get help near you</Text>
                <Text style={styles.smallerText}>
                  Get to a domestic emergency unit near you
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ongoingChat");
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 600 }}> {">"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </SafeAreaView> */}

          <Navigation navigation={navigation} activePage="help" />
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // justifyContent: "space-between",
    paddingHorizontal: 15,
    height: "100%",
  },
  headerText: {
    paddingTop: 15,
    fontSize: 20,
    fontWeight: 600,
  },
  helpText: {
    fontSize: 13,
    fontWeight: 700,
  },
  helps: {
    flexDirection: "column",
    gap: 20,
    paddingVertical: 10,
    flex: 1,
  },
  help: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderWidth: 0.5,
    borderColor: "#e5e8e8",
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
  },
  smallerText: {
    fontSize: 11,
    paddingTop: 5,
  },
  tab: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  HomeText: {
    color: "rgba(0, 128,128,255)",
    fontWeight: 600,
  },
});
