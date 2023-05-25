import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function handleClick(e) {
    e.stopPropagation();
    // when we dont use arrow fns, it only runs once, even there is two statement
    setNumber(number + 1);
    setNumber(number + 1);

    // when using arrow function inside set it do it twice here
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    console.log(number);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>Count</button>
    </>
  );
};

export default Counter;
