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
import { useState, useContext, useCallback, useEffect } from "react";
// import { auth } from "../firebase";

export default function ClosedChat({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          {/* CHAT SECTION */}
          <View style={styles.header}>
            <Text>{"<"}</Text>
            <Text style={styles.headerText}>Chat with a professional</Text>
          </View>
          <View
            style={{ height: 1, width: "100%", backgroundColor: "#e5e8e8" }}
          ></View>
          <View style={styles.session}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ongoingChat");
              }}
            >
              <Text style={{ color: "#e5e8e8" }}>Ongoing</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("closedChat");
                }}
              >
                <Text style={{ fontWeight: 600 }}>Closed</Text>
              </TouchableOpacity>

              <View
                style={{ height: 3, backgroundColor: "#008080", marginTop: 2 }}
              ></View>
            </View>
          </View>

          {/* CHAT SESSIONS */}
          <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.chats}>
              {/* EACH CHATS */}
              <View>
                <View style={styles.chat}>
                  <Image
                    source={require("../assets/avatar.png")}
                    style={{
                      width: 47,
                      height: 45,
                      resizeMode: "contain",
                    }}
                  />
                  <View>
                    <Text style={styles.communityText}>
                      Session With Queeneth June
                    </Text>
                    <Text style={styles.smallText}>
                      I am feeling overwhelmed and i don't...
                    </Text>
                    <Text style={styles.dateText}>18/04/2023</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#e5e8e8",
                  }}
                ></View>
              </View>
              <View>
                <View style={styles.chat}>
                  <Image
                    source={require("../assets/avatar.png")}
                    style={{
                      width: 47,
                      height: 45,
                      resizeMode: "contain",
                    }}
                  />
                  <View>
                    <Text style={styles.communityText}>
                      Session With Dr. Ayo Mirabel
                    </Text>
                    <Text style={styles.smallText}>
                      I am feeling overwhelmed and i don't...
                    </Text>
                    <Text style={styles.dateText}>18/04/2023</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#e5e8e8",
                  }}
                ></View>
              </View>
              <View>
                <View style={styles.chat}>
                  <Image
                    source={require("../assets/avatar.png")}
                    style={{
                      width: 47,
                      height: 45,
                      resizeMode: "contain",
                    }}
                  />
                  <View>
                    <Text style={styles.communityText}>
                      Session With Bode Thomas
                    </Text>
                    <Text style={styles.smallText}>
                      I am feeling overwhelmed and i don't...
                    </Text>
                    <Text style={styles.dateText}>12/04/2022</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#e5e8e8",
                  }}
                ></View>
              </View>
            </ScrollView>
          </View>

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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  headerText: {
    fontSize: 18,
    fontWeight: 600,
    paddingLeft: 30,
    alignSelf: "flex-end", // textAlign: "center",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    paddingHorizontal: 15,
    gap: 30,
    alignItems: "center",
  },
  smallText: {
    fontSize: 12,
    paddingTop: 3,
  },
  dateText: {
    fontSize: 10,
    paddingTop: 4,
  },
  chats: {
    flex: 1,
    paddingHorizontal: 15,
  },
  chat: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    // paddingHorizontal: 1
    gap: 10,
  },
  session: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    gap: 20,
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
});
