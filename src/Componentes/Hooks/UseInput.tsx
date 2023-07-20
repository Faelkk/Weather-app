import { useState } from "react";

const UseInput = () => {
  const [valueInput, setValueInput] = useState("");

  return [valueInput, setValueInput];
};

export default UseInput;
