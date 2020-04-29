import React from "react";
import irregularVerbsList from "./IrregularVerbsList.json";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// const irregularVerbsList = [
//   { infinitive: "awake", simplePastTense: "awoke", pastParticiple: "awoken" },
//   { infinitive: "be", simplePastTense: "was, were", pastParticiple: "been" },
//   { infinitive: "bear", simplePastTense: "bore", pastParticiple: "born" },
//   { infinitive: "beat", simplePastTense: "beat", pastParticiple: "beat" },
// ];

function IrregularVerbs() {
  return (
    <div style={wrapperStyle}>
      <h1>
        List of <b>Irregular Verbs</b>
      </h1>
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
          {irregularVerbsList.map((verb) => (
            <tr key={verb.infinitive}>
              <td>{verb.infinitive}</td>
              <td>{verb.simplePastTense}</td>
              <td>{verb.pastParticiple}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IrregularVerbs;
