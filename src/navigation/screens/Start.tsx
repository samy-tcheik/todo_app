import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StartScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          height: 300,
          width: 300,
          backgroundColor: "red",
        }}
      />
      <Text style={styles.title}>Task Management & To-Do List</Text>
      <Text style={styles.content}>
        This productive tool is designed to help you better manage your task
        project-wise conveniently!
      </Text>
      <Button
        style={styles.button}
        onPressIn={() => navigation.navigate("HomeTabs")}
      >
        Let’s Start
      </Button>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", paddingVertical: 30 },
  content: { fontSize: 14, fontWeight: "bold" },
  button: {},
});
