import React, { useContext, useEffect } from "react";
import { AccordionContext } from "./AccordionProvider";

export const Accordion = ({ children, label }) => {
  const { active, setActive } = useContext(AccordionContext);

  return (
    <div onClick={() => setActive(label)}>
      <div className="p-2  cursor-pointer">
        <h3 className={active === label ? "font-bold text-purple-500" : ""}>
          {label}
        </h3>
      </div>
      {active === label && (
        <div className="m-4 shadow p-2 border-2 border-purple-500 rounded-md">
          {children}
        </div>
      )}
    </div>
  );
};
