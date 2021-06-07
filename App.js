import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import Title from "./shared/components/Title";
import Card from "./shared/components/Card";
import InputSection from "./shared/containers/InputSection";
import OutputSection from "./shared/containers/OutputSection";

import theme from "./shared/theme/theme";
import store from "./shared/store";

// =====================================================================
// =========================================================== component

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.tertiary}
        barStyle="light-content"
      />
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Card title>
            <Title />
          </Card>
          <Card>
            <InputSection />
          </Card>
          <Card>
            <OutputSection />
          </Card>
        </Provider>
      </SafeAreaView>
    </>
  );
};

// ==================================================================
// =========================================================== styles

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.tertiary,
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
