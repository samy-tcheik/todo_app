import AppBackground from "@/components/AppBackground";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  return (
    <AppBackground>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Home</Text>
      </SafeAreaView>
    </AppBackground>
  );
};

export default HomeScreen;
