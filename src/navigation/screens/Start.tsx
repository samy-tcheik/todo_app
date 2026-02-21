import AppBackground from "@/components/AppBackground";
import StartButton from "@/components/StartButton";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StartScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <AppBackground>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={styles.image}
            contentFit="contain"
            source={require("../../assets/images/start-image.png")}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Task Management & To-Do List</Text>
            <Text style={styles.content}>
              This productive tool is designed to help you better manage your
              task project-wise conveniently!
            </Text>
          </View>
          <StartButton onPress={() => navigation.navigate("HomeTabs")} />
        </View>
      </SafeAreaView>
    </AppBackground>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  title: {
    color: Colors.black,
    fontFamily: "Lexend-Semi-Bold",
    fontSize: 28,
    paddingVertical: 25,
    textAlign: "center",
  },
  content: {
    color: Colors.grey,
    fontFamily: "Lexend-Regular",
    fontSize: 14,
    textAlign: "center",
  },
  textContainer: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 54,
  },
  image: { height: 350, width: 350, marginTop: 70 },
});
