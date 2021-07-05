import React from "react";
import "./App.css";
import IrregularVerbsComponent from "./components/irregularVerbs/IrregularVerbsComponent";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container maxWidth="sm">
      <h1 style={{textAlign:'center'}}>English Lessons App</h1>
      <IrregularVerbsComponent />
    </Container>
  );
}

export default App;
