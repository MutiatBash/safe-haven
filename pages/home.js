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
// import { ToastContainer } from "react-native-toast-message";
import { AuthContext } from "../authContext.js";
import { useState, useContext, useCallback, useEffect } from "react";
import HomeIcon from "../assets/icons/home-filled.svg";
// import { auth } from "../firebase";

export default function Home({ navigation }) {
  const { username, setUsername } = useContext(AuthContext);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fafafa", flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <Image source={require("../assets/avatar.png")} />
              <View>
                <Text>Welcome back</Text>
                <Text style={styles.headerText}>Ashley Gates</Text>
              </View>
            </View>

            <Image />
          </View>
          <View style={{ flex: 1, paddingHorizontal: 15, position:"relative" }}>
            {/* RESOURCES SECTION */}
            <View>
              <View style={[styles.welcome]}>
                <Text style={{ fontWeight: 600 }}> Resources</Text>

                <Text
                  style={{
                    color: "rgba(0, 128,128,255)",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  See all
                </Text>
              </View>
              <View>
                <ScrollView
                  horizontal="true"
                  contentContainerStyle={styles.resources}
                >
                  <View style={styles.resource}>
                    <View>
                      <Text>Are you a victim?</Text>
                      <Text> Read to learn</Text>
                    </View>
                    <View style={{ paddingLeft: 30 }}>
                      <Image
                        source={require("../assets/home-victim.png")}
                        style={{
                          width: 180,
                          height: 170,
                          resizeMode: "contain",
                          alignSelf: "flex-end",
                        }}
                      />
                    </View>
                  </View>
                  <View style={styles.resource}>
                    <View>
                      <Text>What is domestic violence?</Text>
                      <Text> Read to learn</Text>
                    </View>
                    <View style={{ paddingLeft: 15 }}>
                      <Image
                        source={require("../assets/home-violence.png")}
                        style={{
                          width: 180,
                          height: 170,
                          resizeMode: "contain",
                          // alignSelf: "flex-end",
                        }}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>

            {/* COMMUNITIES SECTION */}
            <View>
              <View style={[styles.welcome]}>
                <Text style={{ fontWeight: 600 }}> Communities</Text>
                <Text
                  style={{
                    color: "rgba(0, 128,128,255)",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  See all
                </Text>
              </View>

              <ScrollView contentContainerStyle={styles.communities}>
                <View style={styles.community}>
                  <Image
                    source={require("../assets/home-end-abuse.png")}
                    style={{
                      width: 47,
                      height: 45,
                      resizeMode: "contain",
                    }}
                  />
                  <View>
                    <Text style={styles.communityText}>
                      End Abuse and domestic violence
                    </Text>
                    <Text style={styles.smallText}>10K Members</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("community");
                  }}
                >
                  <View style={styles.community}>
                    <Image
                      source={require("../assets/home-action-flight.png")}
                    />
                    <View>
                      <Text style={styles.communityText}>
                        Safehaven action fight
                      </Text>
                      <Text style={styles.smallText}>30M Members</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.community}>
                  <Image source={require("../assets/home-support-you.png")} />
                  <View>
                    <Text style={styles.communityText}>Support You</Text>
                    <Text style={styles.smallText}>10K Members</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>

          {/* ADD ICON */}
          <View style={styles.add}>
            <TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
              +
            </Text>
            </TouchableOpacity>
          </View>

          {/* BOTTOM NAVIGATION */}

          <View style={styles.tab}>
            <TouchableOpacity
              onPress={() => navigation.navigate("home")}
              style={{ padding: 6, gap: 3, alignItems: "center" }}
            >
              {/* <HomeIcon /> */}
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
      <SafeAreaView style={{ backgroundColor: "#fff" }}></SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flexDirection: "column",
    backgroundColor: "#fafafa",
   
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
    fontSize: 16,
    fontWeight: 700,
  },
  communityText: {
    fontSize: 12,
    fontWeight: 700,
  },
  smallText: {
    fontSize: 10.5,
    paddingTop: 5,
  },
  add: {
    borderRadius: 100,
    width: 50,
    height: 50,
    position: "fixed",
    bottom: 10,
    left: "80%",
    alignItems: "center",
    backgroundColor: "rgba(0, 128,128,255)",
  },

  resource: {
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 0.3,
    borderColor: "#e5e8e8",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  resources: {
    flexDirection: "row",
    gap: 12,
  },
  communities: {
    flexDirection: "column",
    gap: 12,
  },
  shadowProp: {
    shadowColor: "#696969",
    shadowOffset: { width: 0.5, height: 3 },
    shadowOpacity: 0.14,
    shadowRadius: 6,
    elevation: 6,
  },
  welcome: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    // paddingHorizontal: 2,
    gap: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "space-between",
  },
  community: {
    flexDirection: "row",
    padding: 15,
    borderWidth: 0.4,
    borderColor: "#e5e8e8",
    borderRadius: 8,
    backgroundColor: "#fff",
    gap: 20,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
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
  genre: {
    flexDirection: "row",
    alignItems: "center",
    color: "rgba(0, 128,128,255)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
});
