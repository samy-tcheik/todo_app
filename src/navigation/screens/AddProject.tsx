import AppBackground from "@/components/AppBackground";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddProjectScreen: React.FC = () => {
  return (
    <AppBackground>
      <SafeAreaView>
        <Text>Add Project</Text>
      </SafeAreaView>
    </AppBackground>
  );
};

export default AddProjectScreen;
