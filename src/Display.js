import { useContext } from "react";

import { CalContext } from "./App";

export default function Display() {
  const val = useContext(CalContext);

  return (
    <div className="display">
      <div className="text">{val.val}</div>
    </div>
  );
}
