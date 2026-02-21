import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

const StartButton: React.FC<TouchableOpacityProps> = (props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.text}>Let’s Start</Text>
        </View>

        <Image
          style={styles.icon}
          source={require("../assets/images/arrow-left.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    width: "80%",
    alignItems: "center",
    borderRadius: 14,
    marginTop: 40,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.5,
    shadowRadius: 13,
    elevation: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    width: "90%",
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 19,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    position: "absolute",
    right: 0,
  },
});
