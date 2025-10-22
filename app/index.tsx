import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

export type RootTabParamList = {
  Home: undefined;
  About: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const App: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "#000b70ff" },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#003d6eff",
        tabBarIcon: ({ color, size }) => {
          let name: React.ComponentProps<typeof Ionicons>["name"];
          if (route.name === "Home") {
            name = "home-outline";
          } else if (route.name === "About") {
            name = "information-circle-outline";
          } else {
            name = "person-outline";
          }
          return <Ionicons name={name} size={size ?? 24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default App;