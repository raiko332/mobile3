import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>hai ini Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
});

export default ProfileScreen;