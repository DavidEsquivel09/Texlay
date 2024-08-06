import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/1200x/50/07/ed/5007edd4af49dc476e6dc43b5863aac5.jpg",
        }}
        fadeDuration={1000}
        style={{ width: 400, height: 400 }}
      />
      <Text style={{ color: "white" }}>Developing in React Native!</Text>
      <StatusBar style="auto" />
      {/*<Button title="Click here!" onPress={() => alert('Hi!')}/>*/}
      <Pressable
        onPress={() => alert("Hi!")}
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white" }}>Click here!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#162A43",
    alignItems: "center",
    justifyContent: "center",
  },
});
