import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import StartScreen from "./screens/Start";
import TasksScreen from "./screens/Tasks";
import AddProjectScreen from "./screens/AddProject";
import HomeScreen from "./screens/Home";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
        tabBarIcon: () => (
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/home-icon.png")}
          />
        ),
      },
    },
    Tasks: {
      screen: TasksScreen,
      options: {
        headerShown: false,
        tabBarIcon: () => (
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/calendar-icon.png")}
          />
        ),
      },
    },
    AddProject: {
      screen: AddProjectScreen,
      options: {
        headerShown: false,
        tabBarIcon: () => (
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/document-icon.png")}
          />
        ),
      },
    },
    Profile: {
      screen: AddProjectScreen,
      options: {
        headerShown: false,
        tabBarIcon: () => (
          <Image
            style={{ width: 28, height: 28 }}
            source={require("../assets/images/profile-icon.png")}
          />
        ),
      },
    },
  },
  screenOptions: {
    headerShown: false,
    tabBarStyle: {
      paddingTop: 10,
      height: 70,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    tabBarShowLabel: false,
    tabBarBackground: () => (
      <View style={{ backgroundColor: Colors.primaryLight, flex: 1 }} />
    ),
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    StartScreen: {
      screen: StartScreen,
      options: {
        headerShown: false,
      },
    },
    HomeTabs: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
