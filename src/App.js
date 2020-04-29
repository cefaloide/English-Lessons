import React from "react";
import "./App.css";
import IrregularVerbsComponent from "./components/irregularVerbs/IrregularVerbsComponent";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="sm">
      <IrregularVerbsComponent />
    </Container>
  );
}

export default App;
