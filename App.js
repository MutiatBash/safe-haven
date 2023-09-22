import * as React from "react";
// import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Help from "./pages/help";
import Community from "./pages/community";
import Explore from "./pages/explore";
import Report from "./pages/report";
import Document from "./pages/document";
import NewDocument from "./pages/newDocument";
import Onboarding from "./pages/onboarding";
import OngoingChat from "./pages/ongoingChat";
import ClosedChat from "./pages/closedChat";
import Avatar from "./pages/avatar";
import setDefaultProps from "react-native-simple-default-props";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { View, Text, Button, TextInput } from "react-native";
import { AuthProvider } from "./authContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Toast, { BaseToast } from "react-native-toast-message";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const defaultText = {
  style: [{ fontFamily: "PlayfairDisplay" }],
};

const Stack = createNativeStackNavigator();
export default function App(props) {
  // const toastConfig = {
  //   info: ({ text1, ...rest }) => (
  //     <BaseToast
  //       {...rest}
  //       style={{ borderLeftColor: "#411465" }}
  //       text1={text1}
  //       text2={props}
  //     />
  //   ),
  // };

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({
      PlayfairDisplay: require("./assets/fonts/PlayFairDisplay/PlayfairDisplay-Regular.ttf"),
    }).then(() => {
      setDefaultProps(Text, defaultText);
      setDefaultProps(TextInput, defaultText);
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return <></>;
  }

  return (
    // <RootSiblingParent>
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="avatar" component={Avatar} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="help" component={Help} />
          <Stack.Screen name="explore" component={Explore} />
          <Stack.Screen name="community" component={Community} />
          <Stack.Screen name="ongoingChat" component={OngoingChat} />
          <Stack.Screen name="closedChat" component={ClosedChat} />
          <Stack.Screen name="report" component={Report} />
          <Stack.Screen name="document" component={Document} />
          <Stack.Screen name="newDocument" component={NewDocument} />
        </Stack.Navigator>
        {/* <Toast config={toastConfig} /> */}
      </NavigationContainer>
    </AuthProvider>
  );
}
