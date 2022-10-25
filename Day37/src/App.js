import { useState, useEffect } from "react";
import MyButton from "./Components/MyButton";
import "./App.css";

function App() {
  // logic start
  // whatever in useState(x) it will be in number
  const [number, setNumber] = useState(1); // if use handleChange change to const
  const [number2, setNumber2] = useState(number * 2);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  // let disabled1, disabled2;

  // if (number === 10) {
  //   disabled1 = true;
  // } else if (number < 10 && number > 1) {
  //   disabled1 = false;
  //   disabled2 = false;
  // } else if (number === 1) {
  //   disabled2 = true;
  // }

  // convert the disabled
  // const [disabled1, setDisabled1] = useState(false);
  // const [disabled2, setDisabled2] = useState(false);

  // another way
  const handleChange = (diff) => {
    setNumber(number + diff);
  };

  const handleChange2 = () => {
    setNumber2(number * 2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = event.target[0].value;
    const max = event.target[1].value;
    const min = event.target[2].value;

    setNumber(parseInt(value));
    setMax(max);
    setMin(min);
  };
  // const printHello = () => {
  //   console.log("Hello");
  // };

  // useEffect(() => printHello(), [number]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    handleChange2();
  }, [number]);

  // logic end

  return (
    <>
      {/* New */}

      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="number" placeholder="Start Number" />
        <input type="number" placeholder="Max Number" />
        <input type="number" placeholder="Min Number" />
        <MyButton type="submit">Submit</MyButton>
      </form>
      <h1>{number}</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {/* <MyButton onClick={() => setNumber(number + 1)} disabled={disabled1}>
          +1
        </MyButton>
        <MyButton onClick={() => setNumber(number - 1)} disabled={disabled2}>
          -1
        </MyButton> */}
        <MyButton
          onClick={() => {
            if (number < max) {
              handleChange(+1);
            }
          }}
        >
          +1
        </MyButton>
        <MyButton
          onClick={() => {
            if (number > min) {
              handleChange(-1);
            }
          }}
        >
          -1
        </MyButton>
      </div>
      <h1>{number2}</h1>
      {/* first */}
      {/* <div style={{ display: "flex", gap: "10px" }}>
        <MyButton children="Button 1" />
        <MyButton>Button 2</MyButton>
      </div> */}

      {/* second */}
      {/* <div style={{ display: "flex", gap: "10px" }}>
        <MyButton height="65px" fontSize="30px">
          Large
        </MyButton>
        <MyButton height="45px" fontSize="20px">
          Standard
        </MyButton>
        <MyButton height="35px" fontSize="15px">
          Small
        </MyButton>
        <MyButton height="25px" fontSize="10px">
          Tiny
        </MyButton>
      </div> */}

      {/* third */}
      {/* <div style={{ display: "flex", gap: "10px" }}>
        <MyButton
          size="large"
          onClick={() => {
            console.log(`Large`);
          }}
        >
          Large
        </MyButton>
        <MyButton
          size="standard"
          onClick={() => {
            console.log(`Standard`);
          }}
        >
          Standard
        </MyButton>
        <MyButton
          size="small"
          onClick={() => {
            console.log(`Small`);
          }}
          disabled={true} // here is the disabled
        >
          Small
        </MyButton>
        <MyButton
          size="tiny"
          onClick={() => {
            console.log(`Tiny`);
          }}
        >
          Tiny
        </MyButton>
      </div> */}
    </>
  );
}

export default App;
