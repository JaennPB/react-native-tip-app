import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Provider } from "react-redux";

import Card from "./shared/components/Card";
import InputSection from "./shared/containers/InputSection";
import OutputSection from "./shared/containers/OutputSection";
import Title from "./shared/components/Title";
import theme from "./shared/theme/theme";
import store from "./shared/store";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.tertiary}
        barStyle="light-content"
      />
      <Provider store={store}>
        <View style={styles.container}>
          <Card title>
            <Title />
          </Card>
          <Card>
            <InputSection />
          </Card>
          <Card>
            <OutputSection />
          </Card>
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  statusBar: {
    backgroundColor: "red",
  },
});
