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
// import { AuthContext } from "../authContext";
// import { books } from "../Books.js";
// import Toast from "react-native-root-toast";
// import { ToastContainer } from "react-native-toast-message";
import { useState, useContext, useCallback, useEffect } from "react";
// import { auth } from "../firebase";

export default function Community({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <View>
              <View style={{ borderRadius: 8 }}>
                <Image
                  source={require("../assets/community-safehaven.png")}
                  style={{
                    width: "100%",

                    resizeMode: "contain",
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 12,
                }}
              >
                <View>
                  <Text style={styles.headerText}>Safehaven action fight</Text>
                  <Text style={styles.smallText}>joined by 30m members</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("home");
                      console.log("pressed");
                    }}
                    style={styles.buttonContainer}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      join
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* GROUP NFORMATION */}
            <View style={{ flex: 1 }}>
              <ScrollView>
                <Text style={styles.rulesText}>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual.
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the
                  actualBut I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual.
                </Text>

                {/* MODERATORS SECTION */}
                <View>
                  <Text
                    style={{
                      fontWeight: 600,
                      paddingVertical: 12,
                      fontSize: 15,
                    }}
                  >
                    Moderators
                  </Text>

                  <View style={styles.welcome}>
                    <Image source={require("../assets/moderator-1.png")} />
                    <View>
                      <Text style={styles.headerText}>Abiola Adeshola</Text>
                      <Text style={styles.smallText}>@Abisola</Text>
                    </View>
                  </View>
                  <View style={styles.welcome}>
                    <Image source={require("../assets/moderator-2.png")} />
                    <View>
                      <Text style={styles.headerText}>Elizabeth Okoro</Text>
                      <Text style={styles.smallText}>@Eli267</Text>
                    </View>
                  </View>
                  <View style={styles.rules}>
                    <Text>Rules</Text>
                    <Text style={styles.rulesText}>
                      1. But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual
                    </Text>
                    <Text style={styles.rulesText}>
                      2. But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual
                    </Text>
                    <Text style={styles.rulesText}>
                      3. But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual
                    </Text>
                  </View>

                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("home");
                        console.log("pressed");
                      }}
                      style={styles.buttonContainer}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "#fff",
                          fontSize: 16,
                          paddingVertical: 9,
                          fontWeight: 500,
                        }}
                      >
                        Join Community
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.tab}>
            <TouchableOpacity
              onPress={() => navigation.navigate("home")}
              style={{ padding: 6, gap: 3, alignItems: "center" }}
            >
              <Text style={styles.HomeText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: 6, gap: 3 }}
              onPress={() => navigation.navigate("help")}
            >
              <Text>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ padding: 6, gap: 3, alignItems: "center" }}
              onPress={() => navigation.navigate("explore")}
            >
              <Text>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: 6, gap: 3, alignItems: "center" }}
              onPress={() => navigation.navigate("community")}
            >
              <Text>Community</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  loader: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },

  headerText: {
    // fontFamily: "Inter",
    fontSize: 15,
    fontWeight: 600,
  },
  smallText: {
    fontSize: 12,
    paddingTop: 5,
  },
  rulesText: {
    fontSize: 13,
  },
  buttonContainer: {
    backgroundColor: "rgba(0, 128,128,255)",
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  button: {
    display: "flex",
    textAlign: "center",
    borderRadius: 8,
    paddingVertical: 6,
    fontSize: 6,
    paddingHorizontal: 6,
  },
  welcome: {
    flexDirection: "row",
    paddingVertical: 10,
    gap: 20,
    width: "100%",
    justifyContent: "flex-start",
  },
  rules: {
    flexDirection: "column",
    paddingVertical: 10,
    gap: 15,

  
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
