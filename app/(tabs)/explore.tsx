import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Created By Moreshwar Wagh</ThemedText>
      </ThemedView>
      <ThemedText>
        Calucator app you can perform arithmatic operations by using this
        application stacks used
      </ThemedText>

      {/* Dark mode */}
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{" "}
          <ThemedText type="defaultSemiBold">useThemeContext()</ThemedText> hook
          lets you inspect what the user's current color scheme is, and so you
          can adjust UI colors accordingly.
        </ThemedText>
        {/* <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink> */}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
