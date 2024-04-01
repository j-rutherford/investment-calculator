import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: +1000,
    annualInvestment: +1200,
    expectedReturn: +6,
    duration: +10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((oldData) => {
      return {
        ...oldData,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {inputIsValid ? <Results input={userInput} />: <p className="center">Please enter a duration greater than zero.</p>}
    </>
  );
}

export default App;
