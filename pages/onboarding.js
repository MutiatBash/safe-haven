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
  ImageBackground,
} from "react-native";
import creamBg from "../assets/onboarding-bg-cream.png";
import hands from "../assets/onboarding-hands.png";

export default function Onboarding({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ImageBackground
          source={creamBg}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                marginBottom: 20,
                textAlign: "left",
              }}
            >
              We are here to help and support you
            </Text>
            <Text>
              Our mission is to empower survivors and raise awareness about
              domestic violence.
            </Text>
            <Image
              source={hands}
              style={{ marginVertical: 40, width: "90%", borderRadius: 6 }}
            />

            <View style={{ width: "70%" }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("home");
                }}
                style={styles.buttonContainer}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("signup");
                }}
                style={styles.skipContainer}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#B6C1C7",
                  }}
                >
                  Skip
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
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
  buttonContainer: {
    width: "90%",
    backgroundColor: "rgba(0, 128,128,255)",
    borderRadius: 2,
    marginTop: 30,
    paddingVertical: 15,
    width: "100%",
  },
  skipContainer: {
    paddingVertical: 15,
    marginTop: 10,
  },
  backgroundImage: {
    paddingTop: 60,
  },
});
