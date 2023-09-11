import * as React from "react";
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
import onboardingCarousel1 from "../assets/onboarding-carousel-1.png";

import lilacBg from "../assets/onboarding-bg-lilac.png";
import woman from "../assets/onboarding-woman.png";
import onboardingCarousel2 from "../assets/onboarding-carousel-2.png";

import greenBg from "../assets/onboarding-bg-green.png";
import hugging from "../assets/onboarding-women-hugging.png";
import onboardingCarousel3 from "../assets/onboarding-carousel-3.png";

import pinkBg from "../assets/onboarding-bg-pink.png";
import heart from "../assets/onboarding-hands-heart.png";

export default function Onboarding({ navigation }) {
  const slides = [
    {
      background: creamBg,
      title: "We are here to help and support you",
      description:
        "Our mission is to empower survivors and raise awareness about domestic violence.",
      image: hands,
      carousel: onboardingCarousel1,
    },
    {
      background: lilacBg,
      title: "Your Voice Matters",
      description:
        "Your safety is our top priority, All interactions are confidential and secure. Your stories and experiences matter. Share them to inspire others.",
      image: woman,
      carousel: onboardingCarousel2,
    },
    {
      background: greenBg,
      title: "Supportive Community",
      description:
        "Join a caring community of survivors and allies on this journey. Access a wealth of resources, information, and tools to support you.",
      image: hugging,
      carousel: onboardingCarousel3,
    },
    {
      background: pinkBg,
      title: "Let’s get started !",
      description:
        "We'll guide you through a journey of healing and support. Discover how our app can help you break free from violence and find hope.",
      image: heart,
      carousel: undefined,
    },
  ];
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ImageBackground
          source={slides[activeSlideIndex].background}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <View style={{ width: "100%", alignItems: "center", height: 120 }}>
              <Text
                style={{
                  width: "90%",
                  fontSize: 28,
                  fontWeight: "bold",
                  marginBottom: 20,
                }}
              >
                {slides[activeSlideIndex].title}
              </Text>
              <Text style={{ width: "90%" }}>
                {slides[activeSlideIndex].description}
              </Text>
            </View>
            <Image
              source={slides[activeSlideIndex].image}
              style={{ marginVertical: 40, width: "90%", borderRadius: 6 }}
            />
            {slides[activeSlideIndex].carousel && (
              <Image
                source={slides[activeSlideIndex].carousel}
                style={{ marginTop: 20 }}
              />
            )}
            <View style={{ width: "70%" }}>
              {activeSlideIndex < slides.length - 1 ? (
                <TouchableOpacity
                  onPress={() => {
                    setActiveSlideIndex((prev) => prev + 1);
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
              ) : (
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
                    Create account
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View>
              {activeSlideIndex < slides.length - 1 ? (
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
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("signin");
                  }}
                  style={styles.skipContainer}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#000",
                    }}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>
              )}
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
