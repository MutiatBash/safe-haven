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

export default function NewDocument({ navigation }) {
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

          {/* INCIDENT DETAILS PAGE */}
          <View style={{ paddingHorizontal: 15, paddingVertical: 10, flex: 1 }}>
            <Text>
              Details of the incident should remain in a neutral tone stating
              only facts.
            </Text>

            {/* INCIDENT TYPE */}

            <View style={styles.incidentType}>
              <View style={[{ backgroundColor: "#fdcbcb" }, styles.incidents]}>
                <Text
                  style={{
                    color: "red",
                    fontSize: 11,

                    // flexShrink: 1,
                  }}
                >
                  Are you seeking help for yourself
                </Text>
                <Image />
              </View>
              <View style={[{ backgroundColor: "#ddc7fe" }, styles.incidents]}>
                <Text
                  style={{
                    color: "purple",
                    fontSize: 11,

                    // flexWrap: "wrap",
                  }}
                >
                  Are you seeking help for a close friend
                </Text>
              </View>
            </View>

            {/* REPORT FORM */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.form}>
                <View>
                  <Text style={{ paddingVertical: 12 }}>Document name</Text>
                  <TextInput inputMode="text" style={styles.input} />
                </View>
                <View>
                  <Text style={{ paddingVertical: 12 }}>
                    When did this happen?
                  </Text>
                  <TextInput inputMode="text" style={styles.input} />
                </View>
                <View>
                  <Text style={{ paddingVertical: 12 }}>What happened?</Text>
                  <TextInput
                    inputMode="text"
                    multiline={true}
                    numberOfLines={10}
                    style={[
                      { textAlignVertical: "top", height: 100 },
                      styles.input,
                    ]}
                  />
                </View>
                <View>
                  <Text style={{ paddingVertical: 12 }}>Add File </Text>
                  <View style={styles.addFile}>
                    <Text>+</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("home");
                      console.log("pressed");
                    }}
                    style={styles.buttonContainer}
                  >
                    <Text style={styles.button}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
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
    fontSize: 18,
    fontWeight: 600,
    paddingLeft: 30,
    alignSelf: "flex-end",
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
  incidents: {
    padding: 15,
    borderRadius: 6,
    flexShrink: 1,
    width: "50%",
  },
  incidentType: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    gap: 10,
    // width: "100%"
    justifyContent: "space-between",
  },
  addFile: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#e5e8e8",
    alignItems: "center",
    width: "30%",
    padding: 30,
  },
  buttonContainer: {
    backgroundColor: "rgba(0, 128,128,255)",
    borderRadius: 8,
    paddingHorizontal: 18,
    marginTop: 10,
    paddingVertical: 10,
  },
  button: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    paddingVertical: 8,
    fontWeight: 500,
  },
});
