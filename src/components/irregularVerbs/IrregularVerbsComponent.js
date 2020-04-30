import React, { useState, useEffect } from "react";
import irregularVerbsList from "./IrregularVerbsList.json";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function IrregularVerbsComponent() {
  const [fillTheGap, setFillTheGap] = useState(true);
  const [irregularVerbs, setIrregularVerbs] = useState(irregularVerbsList);

  useEffect(() => {
    hideRandomCols();
  }, []);

  const hideRandomCols = () => {
    console.log("hideRandomCols");
    const verbsWithHiddenCols = irregularVerbs.map((verb) => {
      const min = 1;
      const max = 3;
      const visibleCol = Math.floor(Math.random() * (max - min + 1) + min);
      if (visibleCol === 1) {
        verb.infinitive.visible = true;
        verb.simplePastTense.visible = false;
        verb.pastParticiple.visible = false;
      } else if (visibleCol === 2) {
        verb.infinitive.visible = false;
        verb.simplePastTense.visible = true;
        verb.pastParticiple.visible = false;
      } else if (visibleCol === 3) {
        verb.infinitive.visible = false;
        verb.simplePastTense.visible = false;
        verb.pastParticiple.visible = true;
      }
      return verb;
    });
    const tempVerbs = [...verbsWithHiddenCols];
    setIrregularVerbs(tempVerbs);
  };
  const toggleFillTheGap = () => {
    hideRandomCols();
    setFillTheGap(!fillTheGap);
  };

  const shuffleList = () => {
    var currentIndex = irregularVerbs.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = irregularVerbs[currentIndex];
      irregularVerbs[currentIndex] = irregularVerbs[randomIndex];
      irregularVerbs[randomIndex] = temporaryValue;
    }
    const tempIrregularVerbs = [...irregularVerbs];
    setIrregularVerbs(tempIrregularVerbs);
  };

  return (
    <div style={wrapperStyle}>
      <h1>List of Irregular Verbs</h1>
      <div>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => toggleFillTheGap()}
        >
          {fillTheGap && "stop filling the gap"}
          {!fillTheGap && "start filling the gap"}
        </Button>{" "}
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => shuffleList()}
        >
          shuffle list
        </Button>
      </div>
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
          {irregularVerbs.map((verb) => {
            if (fillTheGap) {
              return (
                <tr key={verb.infinitive.value}>
                  <td>
                    {verb.infinitive.visible && verb.infinitive.value}
                    {!verb.infinitive.visible && (
                      <form noValidate autoComplete="off">
                        <TextField
                          id="standard-basic"
                          label=""
                          error={verb.infinitive.error}
                        />
                      </form>
                    )}
                  </td>
                  <td>
                    {verb.simplePastTense.visible && verb.simplePastTense.value}
                    {!verb.simplePastTense.visible && (
                      <form noValidate autoComplete="off">
                        <TextField
                          id="standard-basic"
                          label=""
                          error={verb.simplePastTense.error}
                        />
                      </form>
                    )}
                  </td>
                  <td>
                    {verb.pastParticiple.visible && verb.pastParticiple.value}
                    {!verb.pastParticiple.visible && (
                      <form noValidate autoComplete="off">
                        <TextField
                          id="standard-basic"
                          label=""
                          error={verb.pastParticiple.error}
                        />
                      </form>
                    )}
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={verb.infinitive.value}>
                  <td>{verb.infinitive.value}</td>
                  <td>{verb.simplePastTense.value}</td>
                  <td>{verb.pastParticiple.value}</td>
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
