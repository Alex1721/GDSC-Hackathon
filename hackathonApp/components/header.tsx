import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <View>
      <Text style={{ fontFamily: "niv-b", fontSize: 30 }}>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
