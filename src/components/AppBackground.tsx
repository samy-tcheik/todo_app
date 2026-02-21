import { ImageBackground } from "expo-image";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

const AppBackground: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground
      style={styles.container}
      contentFit="fill"
      source={require("../assets/images/app-background.png")}
    >
      {children}
    </ImageBackground>
  );
};

export default AppBackground;

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", height: "100%" },
});
