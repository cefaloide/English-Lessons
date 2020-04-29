import React, { useState } from "react";
import irregularVerbsList from "./IrregularVerbsList.json";
import Button from "@material-ui/core/Button";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function IrregularVerbsComponent() {
  const [fillTheGap, setFillTheGap] = useState(false);
  const toggleFillTheGap = () => {
    console.log("fillTheGap");
    setFillTheGap(!fillTheGap);
  };
  return (
    <div style={wrapperStyle}>
      <h1>
        List of <b>Irregular Verbs</b>
      </h1>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={() => toggleFillTheGap()}
      >
        hide/show verbs
      </Button>
      <br />
      <table border="1" cellPadding="2" cellSpacing="2" bordercolor="#000000">
        <tbody>
          <tr>
            <th>
              <strong>Infinitive</strong>
            </th>
            <th>
              <strong>Simple Past Tense</strong>
            </th>
            <th>
              <strong>Past Participle</strong>
            </th>
          </tr>
          {irregularVerbsList.map((verb) => {
            const min = 1;
            const max = 3;
            const showCol = Math.floor(Math.random() * (max - min + 1) + min);
            if (fillTheGap) {
              return (
                <tr key={verb.infinitive}>
                  <td>{showCol === 1 && verb.infinitive}</td>
                  <td>{showCol === 2 && verb.simplePastTense}</td>
                  <td>{showCol === 3 && verb.pastParticiple}</td>
                </tr>
              );
            } else {
              return (
                <tr key={verb.infinitive}>
                  <td>{verb.infinitive}</td>
                  <td>{verb.simplePastTense}</td>
                  <td>{verb.pastParticiple}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default IrregularVerbsComponent;
