import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Hai ini About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
});

export default AboutScreen;