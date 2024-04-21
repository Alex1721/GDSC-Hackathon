import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  _ScrollView,
} from "react-native";
import React, { useRef } from "react";

import Bullet from "@/components/results/bullet";
import Test from "@/components/results/test";
import { useLocalSearchParams } from "expo-router";

const Result = () => {
  const _ScrollView = useRef<ScrollView>(null);

  const scrollTo = (x: number) => {
    _ScrollView.current?.scrollTo({
      x: x,
      y: 0,
      animated: true,
    });
  };

  const [result, setResult] = React.useState("");

  const params = useLocalSearchParams();
  const input = params.input as string;

  const handlePress = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/get-data/?input_value=${encodeURIComponent(
          input
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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        ref={_ScrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Bullet scroll={scrollTo} />
        <Test scroll={scrollTo} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({});
