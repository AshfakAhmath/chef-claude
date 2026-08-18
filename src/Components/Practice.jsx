import React from "react";

function Practice() {
  const [count, setCount] = React.useState(0);

  const [isGoingOut, setIsGoingOut] = React.useState("Yes");
console.log(isGoingOut);
  function handleClick() {
    setIsGoingOut((prevValue) => (prevValue ? "No" : "Yes"));
  }

  function handleMinus() {
    setCount((prevCount) => prevCount - 1);
  }

  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <div className="container">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button
            onClick={handleMinus}
            className="minus"
            aria-label="Decrease count"
          >
            –
          </button>
          <h2 className="count">{count}</h2>
          <button
            onClick={handlePlus}
            className="plus"
            aria-label="Increase count"
          >
            +
          </button>
        </div>
      </div>

      <main>
        <h1 className="title">Do I feel like going out tonight?</h1>
        <button onClick={handleClick} className="value">
          {isGoingOut}
        </button>
      </main>
    </>
  );
}

export default Practice;
