import { useEffect, useState } from "react";

function Counter() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(5);

  function Hello() {
    console.log("HEllo");
  }

  useEffect(() => {
    console.log("Inside");
  }, []);

  console.log("Outside");

  //componentDidMount
  //componentDidUpdate
  //componentWillUnmount

  return (
    <>
      {counter1}
      <br />
      {counter2}
      <br />
      <button onClick={() => setCounter1(counter1 + 1)}>
        Increment counter 1
      </button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment counter 2
      </button>
    </>
  );
}

export default Counter;
