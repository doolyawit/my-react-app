import { useEffect, useState } from "react";

export const useTitle = () => {
  const [name, setName] = useState("Diwx");
  useEffect(() => {
    document.title = `React Poke API : Hello Master ${name}`;
  }, [name]);

  return {
    name,
    setName,
  };
};
