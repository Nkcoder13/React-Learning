import { useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h4>This is Contact Page</h4>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase count
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Contact;
