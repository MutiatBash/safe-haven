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
import abuser from "../assets/explore-abuser.png";
import domesticViolence from "../assets/explore-domestic-violence.png";
import help from "../assets/explore-help.png";
import victim from "../assets/explore-victim.png";
import scared from "../assets/explore-scared.png";
import { Navigation } from "./home";

function ArticleAuthor() {
  return (
    <View style={styles.articleAuthor}>
      <Text> Adeola Greg</Text>
      <View>
        <Text>5 mins read</Text>
      </View>
    </View>
  );
}

export default function Explore({ navigation }) {
  const [activeTab, setActiveTab] = useState("resources");
  const articles = [
    {
      image: domesticViolence,
      title: "What is Domestic Violence",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
    },
    {
      image: help,
      title: "Getting help",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
    },
    {
      image: victim,
      title: "Are you a victim?",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
    },
    {
      image: scared,
      title: "Are you scared?",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
    },
  ];

  const hotlines = [
    {
      title: "Brave heart Initiative",
      code: "0807-398-9838, 0706-191-0869",
    },
    {
      title: "Cece Yara Foundation",
      code: "0807-398-9838, 0706-191-0869",
    },
    {
      title: "Dorathy Njemanze foundation",
      code: "0807-398-9838, 0706-191-0869",
    },
    {
      title: "Lagos state domestic sexual and violence response team",
      code: "0807-398-9838, 0706-191-0869",
    },
    {
      title: "Internation fedaeration of women lawyers ( FIDA )",
      code: "0807-398-9838, 0706-191-0869",
    },
    {
      title: "Isa wali empowerment initiative ( IWEI )",
      code: "0807-398-9838, 0706-191-0869",
    },
    {
      title: "Mirabel Center",
      code: "0807-398-9838, 0706-191-0869",
    },
  ];

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
        <View style={styles.container}>
          <View style={{ width: "100%", alignItems: "center", flex: 1 }}>
            <View style={styles.welcome}>
              <View
                style={[
                  activeTab == "resources" && styles.activeTabHeader,
                  styles.headerContainer,
                ]}
              >
                <Text
                  style={styles.tabHeader}
                  onPress={() => {
                    setActiveTab("resources");
                  }}
                >
                  Resources
                </Text>
              </View>
              <View
                style={[
                  activeTab == "hotlines" && styles.activeTabHeader,
                  styles.headerContainer,
                ]}
              >
                <Text
                  style={styles.tabHeader}
                  onPress={() => {
                    setActiveTab("hotlines");
                  }}
                >
                  Hotlines
                </Text>
              </View>
            </View>

            {activeTab == "resources" && (
              <View style={{ width: "100%", alignItems: "center" }}>
                <View style={{ width: "90%" }}>
                  <TextInput
                    inputMode="text"
                    style={styles.input}
                    placeholder="Search for articles, educational content etc"
                  />
                </View>
                {/* ARTICLES SECTION */}
                <View style={{ width: "90%", marginVertical: 20 }}>
                  <View style={{ backgroundColor: "#fff", borderRadius: 6 }}>
                    <Image
                      source={abuser}
                      style={{ width: "100%", borderRadius: 6 }}
                    />
                    <View style={{ padding: 15 }}>
                      <Text style={{ fontSize: 18 }}>
                        How I Escaped My Abuser
                      </Text>
                      <ArticleAuthor />
                    </View>
                  </View>

                  <ScrollView contentContainerStyle={{}}>
                    {articles.map((article) => (
                      <View style={styles.article} key={article.image}>
                        <View>
                          <Image source={article.image} />
                        </View>
                        <View style={{ width: "70%" }}>
                          <Text style={styles.headerText}>{article.title}</Text>
                          <Text style={styles.smallText}>
                            {article.description}
                          </Text>
                          <ArticleAuthor />
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </View>
            )}

            {activeTab == "hotlines" && (
              <View style={{ width: "100%", alignItems: "center" }}>
                {/* HOTLINES SECTION */}
                <View style={{ width: "90%" }}>
                  <ScrollView>
                    {hotlines.map((hotline) => (
                      <View style={styles.article} key={hotline.title}>
                        <View style={{ width: "100%" }}>
                          <Text style={styles.headerText}>{hotline.title}</Text>
                          <Text style={styles.smallText}>
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born...
                          </Text>
                          <Text style={styles.smallText}>{hotline.code}</Text>
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              </View>
            )}
          </View>
          <Navigation navigation={navigation} activePage="explore" />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: "#fff" }}></SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  welcome: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    alignItems: "left",
    justifyContent: "left",
    width: "90%",
    paddingTop: 20,
  },
  tabHeader: {
    fontSize: 18,
  },
  activeTabHeader: {
    borderBottomColor: "rgba(0, 128,128,255)",
    borderBottomWidth: 3,
  },
  headerContainer: {
    marginRight: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#c5c5c5",
    borderRadius: 6,
    padding: 12,
    width: "100%",
    marginBottom: 6,
  },
  articleAuthor: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  smallText: {
    fontSize: 10,
    paddingTop: 5,
  },
  article: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    gap: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },

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
