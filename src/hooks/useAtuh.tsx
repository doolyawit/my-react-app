import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuth, setAuth] = useState<boolean>(true);

  useEffect(() => {
    console.log("call me");
  }, []);

  return {
    isAuth,
    setAuth,
  };
};
