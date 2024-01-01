import { useState } from "react";

const DemoReact = () => {
  const [clicked, setClicked] = useState(false);

  console.count("DemoReact.render");

  return (
    <div>
      <h6>Hello this is react component</h6>
      <button
        className="btn btn-primary"
        onClick={() => setClicked((prev) => !prev)}
      >
        {clicked ? "Nice to see you" : "Click ME :D"}
      </button>
    </div>
  );
};

export default DemoReact;
