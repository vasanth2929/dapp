import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const AccordionContext = createContext();

export const AccordionProvider = ({ children }) => {
  const [active, setActive] = useState("Profile");

  return (
    <AccordionContext.Provider value={{ active, setActive }}>
      {children}
    </AccordionContext.Provider>
  );
};
