import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  _ScrollView,
} from "react-native";
import React, { useRef } from "react";

import Bullet from "@/components/results/bullet";
import Test from "@/components/results/test";

const Home = () => {
  const _ScrollView = useRef<ScrollView>(null);

  const scrollTo = (x: number) => {
    _ScrollView.current?.scrollTo({
      x: x,
      y: 0,
      animated: true,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        ref={_ScrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Test scroll={scrollTo} />
        <Bullet scroll={scrollTo} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
