import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from "react-native";
import { Provider } from "react-redux";

import Card from "./shared/components/Card";
import InputSection from "./shared/containers/InputSection";
import OutputSection from "./shared/containers/OutputSection";
import Title from "./shared/components/Title";
import theme from "./shared/theme/theme";
import store from "./shared/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={theme.colors.tertiary}
        barStyle="light-content"
      />
      <ScrollView endFillColor={theme.colors.tertiary}>
        <SafeAreaView style={styles.container}>
          <Card title>
            <Title />
          </Card>
          <Card>
            <InputSection />
          </Card>
          <Card>
            <OutputSection />
          </Card>
        </SafeAreaView>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.tertiary,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
