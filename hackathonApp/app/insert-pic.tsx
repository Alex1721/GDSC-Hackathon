import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

const InsertPic = () => {
  const [inputText, setInputText] = useState("");
  const [category, setCategory] = useState("Science");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
      style={styles.container}
    >
      <Pressable style={{ alignItems: "center" }}>
        <Ionicons name="add-circle" size={90} color="#314053" />
      </Pressable>
      <View style={{ gap: 5, flex: 1 }}>
        <Text style={{ fontSize: 24, paddingLeft: 5 }}>Add a question</Text>
        <TextInput
          placeholder="Add some information..."
          placeholderTextColor={"#314053"}
          onChangeText={(text) => setInputText(text)}
          value={inputText}
          style={styles.input}
        />
      </View>
      <Pressable style={styles.search}>
        <Text style={styles.searchText}>SEARCH</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InsertPic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 15,
    gap: 80,
  },
  arrow: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#E1E8EE",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#314053",
    borderRadius: 12,
    marginBottom: 30,
  },
  searchText: {
    color: "white",
    fontSize: 24,
    fontFamily: "niv-r-smallcaps",
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "#E1E8EE",
    borderRadius: 12,
    fontSize: 18,
    fontFamily: "niv-r-smallcaps",
  },
});
