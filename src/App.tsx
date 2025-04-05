import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import NavBar from "./components/UI/NavBar";

export default function App() {
  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
