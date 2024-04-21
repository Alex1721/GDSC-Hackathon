import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";

import Header from "../header";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const DATA = [
  {
    question: "When did Thomas Edison died due to a heart attack?",
    answer: "October 18, 1931",
  },
  {
    question: "Shallom my brothers",
    answer: "This is the answer to the question.",
  },
  {
    question: "When did Hitler discover America?",
    answer: "November 18, 1856",
  },
];

interface BulletProps {
  scroll: (x: number) => void;
}

interface RenderBulletProps {
  question: string;
  answer: string;
  piece: number;
  setPiece: (x: number) => void;
}

const RenderBullet = ({
  question,
  answer,
  piece,
  setPiece,
}: RenderBulletProps) => {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (valid) {
      setPiece(piece + 1);
    } else if (!valid && piece > 0) {
      setPiece(piece - 1);
    }
  }, [valid]);

  return (
    <View style={{ gap: 10 }}>
      <View style={styles.bullet}>
        <Text style={{ fontFamily: "niv-r-smallcaps", fontSize: 20 }}>
          {question}
        </Text>
      </View>
      <View style={{ paddingLeft: 80, gap: 10 }}>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        >
          <Ionicons name="square-outline" size={24} color="#314053" />
          <Text>{answer}</Text>
        </Pressable>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        >
          <Ionicons name="square-outline" size={24} color="#314053" />
          <Text>{answer}</Text>
        </Pressable>
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        >
          <Ionicons name="square-outline" size={24} color="#314053" />
          <Text>{answer}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Test = ({ scroll }: BulletProps) => {
  const [active, setActive] = useState(false);
  const [piece, setPiece] = useState(0);

  const scrollTo = () => {
    scroll(windowWidth);
  };

  useEffect(() => {
    if (piece === DATA.length) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [piece]);

  return (
    <View style={styles.container}>
      <Header
        title={"Test yourself!"}
        subtitle={
          "Answer correctly to all the following questions to skip to the next stage."
        }
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <RenderBullet
            question={item.question}
            answer={item.answer}
            piece={piece}
            setPiece={setPiece}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        contentContainerStyle={styles.bulletContainer}
      />
      <Pressable
        onPress={scrollTo}
        disabled={active}
        style={
          active
            ? styles.button
            : [styles.button, { backgroundColor: "#9AA3AA" }]
        }
      >
        <Text style={{ color: "white", fontSize: 24 }}>NEXT</Text>
      </Pressable>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    padding: 15,
    flex: 1,
    gap: 40,
    justifyContent: "space-between",
  },
  button: {
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#314053",
  },
  bulletContainer: {
    padding: 10,
    backgroundColor: "#E1E8EE",
    borderRadius: 12,
    gap: 10,
  },
  bullet: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
