import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const isAndroid = Platform.OS === "android";
console.log("" + isAndroid ? StatusBar.currentHeight : 0);
export default function App() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#fcf5f5",
          marginTop: isAndroid ? StatusBar.currentHeight : 0,
        }}
      >
        <View
          style={{
            padding: 16,
            backgroundColor: "green",
            alignItems: "center",
          }}
        >
          <Text> Search </Text>
        </View>
        <View style={{ padding: 16, backgroundColor: "blue" }}>
          <Text>
            Hello this is the list dfwfr ergwer berg b wegw tegset gregre
            gegsegg w etgew gewrgwr wreg wer ger ger gewg ewgrew gerwg ewrg rew
            gew gegre gerger ger gergweg rg wr gwr gewrt gew gwegwe gw
          </Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
