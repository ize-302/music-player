import React from "react";

import { AppearanceProvider } from "react-native-appearance";
import Navigation from "./src";

export default function App() {
  return (
    <AppearanceProvider>
      <Navigation />
    </AppearanceProvider>
  );
}
