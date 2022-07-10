import { useCallback, useState } from "react";
import { ButtonIncrement } from "./ButtonIncrement";

export const CallbackCounter = () => {
  const [counter, setCounter] = useState(1);

  const callbackIncrement = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  const increment = () => {
    setCounter((value) => value + 1);
  };

  return (
    <>
      <h1> Counter {counter}</h1>

      <ButtonIncrement increment={callbackIncrement} />
    </>
  );
};
