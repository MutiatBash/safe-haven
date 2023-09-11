import * as React from "react";
// import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Help from "./pages/help";
import Community from "./pages/community";
import Explore from "./pages/explore";
import OngoingChat from "./pages/ongoingChat";
import ClosedChat from "./pages/closedChat";
import { View, Text, Button } from "react-native";
import { AuthProvider } from "./authContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Toast, { BaseToast } from "react-native-toast-message";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
  return (
    // <RootSiblingParent>
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="help" component={Help} />
          <Stack.Screen name="explore" component={Explore} />
          <Stack.Screen name="community" component={Community} />
          <Stack.Screen name="ongoingChat" component={OngoingChat} />
          <Stack.Screen name="closedChat" component={ClosedChat} />
        </Stack.Navigator>
        {/* <Toast config={toastConfig} /> */}
      </NavigationContainer>
    </AuthProvider>
  );
}
