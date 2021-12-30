import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
