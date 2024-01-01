/** @jsxImportSource solid-js */

import { createSignal } from "solid-js";

const SolidDemo = () => {
  const [clicked, setClicked] = createSignal(false);

  console.count("SolidDemo.render");

  return (
    <div>
      <h6>Hello this is solid component</h6>
      <button
        class="btn btn-primary"
        onClick={() => setClicked((prev) => !prev)}
      >
        {clicked() ? "Nice to see you" : "Click ME :D"}
      </button>
    </div>
  );
};

export default SolidDemo;
