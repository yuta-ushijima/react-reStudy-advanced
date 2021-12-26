import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
    </div>
  );
}
