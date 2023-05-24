import { useState } from "react";

export const useTitle = () => {
  const [name, setName] = useState("Diwx");

  return {
    name,
    setName,
  };
};
