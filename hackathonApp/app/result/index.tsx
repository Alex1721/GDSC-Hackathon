import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  _ScrollView,
} from "react-native";
import React, { useEffect, useRef } from "react";

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

  const params = useLocalSearchParams();
  const input = params.input as string;

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