import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "flash",
    gradient: ["#181818", "#181818", "#BA8B02"],
    title: "Boom!",
    subtitle: "too spooky, need someone to hug ;(",
  },
  Drizzle: {
    iconName: "rain",
    gradient: ["#ddd6f3", "#faaca8"],
    title: "Not rainy",
    subtitle: "but wet",
  },
  Rain: {
    iconName: "rains",
    gradient: ["#182848", "#4b6cb7"],
    title: "Stay inside",
    subtitle: "and have some coffee",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#8e9eab", "#ffffff"],
    title: "Do you wanna build a snowman?",
    subtitle: "...",
  },
  Clear: {
    iconName: "day-sunny",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "Enjoy the Sun",
    subtitle: "Let's go out!",
  },
  Clouds: {
    iconName: "cloudy",
    gradient: ["#373B44", "#4286f4"],
    title: "It's cloudy",
    subtitle: "probably gonna rain soon",
  },
  Mist: {
    iconName: "fog",
    gradient: ["#334d50", "#3E5151", "#cbcaa5"],
    title: "",
    subtitle: "",
  },
  Smoke: {
    iconName: "fog",
    gradient: ["#334d50", "#3E5151", "#cbcaa5"],
    title: "Get a mask!",
    subtitle: "Or turn your air-purifier on",
  },
  Haze: {
    iconName: "fog",
    gradient: ["#334d50", "#3E5151", "#cbcaa5"],
    title: "",
    subtitle: "",
  },
  Dust: {
    iconName: "fog",
    gradient: ["#334d50", "#3E5151", "#cbcaa5"],
    title: "",
    subtitle: "",
  },
  Fog: {
    iconName: "fog",
    gradient: ["#334d50", "#3E5151", "#cbcaa5"],
    title: "Foggy fog",
    subtitle: "Get some London Fog",
  },
  Sand: {
    iconName: "fog",
    gradient: ["#334d50", "#3E5151", "#cbcaa5"],
    title: "ptooey!",
    subtitle: "",
  },
  Ash: {
    iconName: "fog",
    gradient: ["#334d50", "#3E5151", "#cbcaa5"],
    title: "Get a mask!",
    subtitle: "Or turn your air-purifier on",
  },
  Squall: {
    iconName: "fog",
    gradient: ["#334d50", "#3E5151", "#cbcaa5"],
    title: "",
    subtitle: "",
  },
  Tornado: {
    iconName: "fog",
    gradient: ["#334d50", "#3E5151", "#cbcaa5"],
    title: "Run!",
    subtitle: "I said 'Run!!'",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={{ ...styles.iconContainer, ...styles.halfContainer }}>
        <Fontisto
          size={90}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 50,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "500",
    marginBottom: 7,
  },
  subtitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "400",
    marginBottom: 80,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  iconContainer: {
    marginTop: 70,
    alignItems: "center",
  },
});
