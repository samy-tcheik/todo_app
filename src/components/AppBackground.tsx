import { ImageBackground } from "expo-image";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

const AppBackground: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/app-background.png")}
    >
      {children}
    </ImageBackground>
  );
};

export default AppBackground;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});
