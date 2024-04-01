export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            min={0}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            min={0}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            min={1}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
            step={0.1}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            min={1}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
