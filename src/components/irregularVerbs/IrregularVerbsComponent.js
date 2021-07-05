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
  const [fillTheGap, setFillTheGap] = useState(false);
  const [irregularVerbs, setIrregularVerbs] = useState(irregularVerbsList);

  useEffect(() => {
    hideRandomCols();
  }, []);

  const hideRandomCols = () => {
    const verbsWithHiddenCols = irregularVerbs.map((verb) => {
      //set all error values to true
      verb.infinitive.error = true;
      verb.simplePastTense.error = true;
      verb.pastParticiple.error = true;
      //get visible Column
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

  const onChange = (evt, correctValue) => {
    console.log("onchange");
    const inputValue = evt.target.value;
    console.log(inputValue + "===" + correctValue);
    if (inputValue === correctValue) {
      const updatedIrregularVerbs = irregularVerbs.map((verb) => {
        if (correctValue === verb.infinitive.value) {
          verb.infinitive.error = false;
        }

        if (correctValue === verb.simplePastTense.value) {
          verb.simplePastTense.error = false;
        }

        if (correctValue === verb.pastParticiple.value) {
          verb.pastParticiple.error = false;
        }
        return verb;
      });
      setIrregularVerbs(updatedIrregularVerbs);
    }
  };

  return (
    <div style={wrapperStyle}>
      <h2>List of Irregular Verbs</h2>
      <div>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => toggleFillTheGap()}
        >
          {fillTheGap ? "stop filling the gap" : "start filling the gap"}
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
            if (fillTheGap === true) {
              return (
                <tr key={verb.infinitive.value}>
                  <td>
                    {verb.infinitive.visible && verb.infinitive.value}
                    {!verb.infinitive.visible && (
                      <TextField
                        id="standard-basic"
                        label=""
                        error={verb.infinitive.error}
                        onChange={(evt) => onChange(evt, verb.infinitive.value)}
                      />
                    )}
                  </td>
                  <td>
                    {verb.simplePastTense.visible && verb.simplePastTense.value}
                    {!verb.simplePastTense.visible && (
                      <TextField
                        id="standard-basic"
                        label=""
                        error={verb.simplePastTense.error}
                        onChange={(evt) =>
                          onChange(evt, verb.simplePastTense.value)
                        }
                      />
                    )}
                  </td>
                  <td>
                    {verb.pastParticiple.visible && verb.pastParticiple.value}
                    {!verb.pastParticiple.visible && (
                      <TextField
                        id="standard-basic"
                        label=""
                        error={verb.pastParticiple.error}
                        onChange={(evt) =>
                          onChange(evt, verb.pastParticiple.value)
                        }
                      />
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
