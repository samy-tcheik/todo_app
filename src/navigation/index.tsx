import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import StartScreen from "./screens/Start";
import TasksScreen from "./screens/Tasks";
import AddProjectScreen from "./screens/AddProject";
import HomeScreen from "./screens/Home";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="house.fill" color={color} />
        ),
      },
    },
    Tasks: {
      screen: TasksScreen,
      options: {
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="paperplane.fill" color={color} />
        ),
      },
    },
    AddProject: {
      screen: AddProjectScreen,
      options: {
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="paperplane.fill" color={color} />
        ),
      },
    },
  },
  screenOptions: {
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarBackground: TabBarBackground,
    // tabBarStyle: Platform.select({
    //   ios: {
    //     // Use a transparent background on iOS to show the blur effect
    //     possition: "absolute",
    //   },
    //   default: {},
    // }),
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
