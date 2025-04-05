import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <Text>Hola mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    borderWidth: 10,
    borderColor: "red",
    marginTop: Constants.statusBarHeight + 10,
    width: "auto",
  },
});
