import React from "react";

function Practice() {
  const [count, setCount] = React.useState(0);

  const [isGoingOut, setIsGoingOut] = React.useState(true);

  function handleClick() {
    setIsGoingOut((prevValue) => !prevValue);
  }

  function handleMinus() {
    setCount((prevCount) => prevCount - 1);
  }

  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
  }

  const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prevValue) => [
      ...prevValue,
      allFavoriteThings[prevValue.length],
    ]);
    console.log(myFavoriteThings);
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
        <button
          onClick={handleClick}
          aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
          className="value"
        >
          {isGoingOut ? "Yes" : "No"}
        </button>
      </main>

      <div className="array">
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-live="polite">{thingsElements}</section>
      </div>
    </>
  );
}

export default Practice;
