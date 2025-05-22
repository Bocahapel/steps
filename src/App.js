import { useState } from "react";

const messages = ["Learn React", "Apply for Jobs", "Profit"];

//set steps using useState
export default function App() {
  const [step, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // function handleIsOpen() {
  //   setIsOpen((current) => !current);
  // }

  //this is event handler for when user press next button
  function handleNext() {
    if (step < 3) setSteps((currentStep) => currentStep + 1);
  }

  //this is event handler for when user press previous button
  function handlePrevious() {
    if (step > 1) setSteps((currentStep) => currentStep - 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/*when the step is equal, they run the "active" style from css (recolor the button to purple)*/}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            {/*this is previous button, the button color are hardcoded*/}
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              /*when user click the button, js will run the handler function*/
              onClick={handlePrevious}
            >
              Previous
            </button>

            {/*this is next button, the button color are hardcoded*/}
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              /*when user click the button, js will run the handler function*/
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
