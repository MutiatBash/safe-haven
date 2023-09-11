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
            <Text style={styles.headerText}> Get Help</Text>
            <Text>
              You can chat with a professional and your sessions are completely
              safe with us, you can also report an incident or document your
              incidents for safe keeping
            </Text>
          </View>

          {/* HELP SECTION */}
          <View>
            <View style={styles.article}>
              <View>
                <Text style={styles.headerText}>Chat with a professional</Text>
                <Text style={styles.smallText}>10K Members</Text>
                <View>
                  <Text> Adeola Greg</Text>
                  <View>
                    <Text>5 mins read</Text>
                  </View>
                </View>
              </View>
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
    alignItems: "center",
    height: "100%",
  },
  loader: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  HeaderText: {
    // fontFamily: "Inter",
    fontSize: 20,
    fontWeight: 600,
  },
  smallText: {
    fontSize: 16,
    paddingTop: 5,
  },
  buttoncontainer: {
    width: "90%",
    borderRadius: 8,
    marginTop: 45,
    fontSize: 6,
  },
  button: {
    display: "flex",
    textAlign: "center",
    borderRadius: 8,
    paddingVertical: 6,
    fontSize: 6,
    paddingHorizontal: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: 700,
  },
  booksContainer: {
    flexDirection: "row",
    // alignItems: "center",
    paddingVertical: 15,
    flexWrap: "wrap",
    columnGap: 6,
    rowGap: 16,
    justifyContent: "center",
  },
  book: {
    flexDirection: "column",
    // alignItems: "center",
    gap: 5,
    justifyContent: "center",
    padding: 10,
    border: "none",
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  shadowProp: {
    shadowColor: "#696969",
    shadowOffset: { width: 0.5, height: 3 },
    shadowOpacity: 0.14,
    shadowRadius: 6,
    elevation: 6,
  },
  article: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 25,
    gap: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  tab: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 12,
    borderRadiusTopRight: 10,
    gap: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  HomeText: {
    color: "#411465",
    fontWeight: 600,
  },
  genre: {
    flexDirection: "row",
    alignItems: "center",
    color: "#411465",
    backgroundColor: "#D9D0E0",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
});