import {
  Image,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";

const Welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />

      <View style={styles.container}>
        {/* welcome image */}

        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.jpg")}
        />

        {/* title */}

        <View style={{ gap: 20 }}>
          <Text style={styles.title}> Connectify</Text>

          <Text style={styles.punchline}>
            Connect, Share, and Stay in the Loop.
          </Text>
        </View>

        {/* button */}

        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => {}}
          />

          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}> Already have an account!</Text>

            <Pressable>
              <Text
                style={[
                  styles.loginText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },

  welcomeImage: {
    height: hp(50),
    width: wp(100),
    alignItems: "center",
  },

  title: {
    color: theme.colors.text,
    fontSize: hp(5), // This defines the size of the text
    textAlign: "center",
    fontWeight: theme.fonts.extraBold, // This applies the extra bold style
  },

  punchline: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(2), // Size for punchline
    color: theme.colors.text,
    fontWeight: theme.fonts.semibold, // Optional, for making the punchline slightly bold
  },

  footer: {
    gap: 30,
    width: "100%",
  },

  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },

  loginText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
