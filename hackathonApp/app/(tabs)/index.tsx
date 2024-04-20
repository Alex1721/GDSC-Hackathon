import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handlePress = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/get-data/?input_value=${encodeURIComponent(
          inputValue
        )}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const json = await response.json();
      setResult(json.result);
    } catch (error) {
      console.error("Failed to fetch:", error);
      setResult("Failed to connect to the server.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Enter your input:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
        />
        <Button title="Fetch Data" onPress={handlePress} />
        <Text>Output:</Text>
        <Text>{result}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
