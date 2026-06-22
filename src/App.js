import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("This is my project for FalconX");
  };

  return (
    <>
      <h1>Hello Everyone!</h1>
      <p>My first GitHub push.</p>

      <button onClick={handleClick}>
        Show Project Message hhb
      </button>

      <Message text={message} />
    </>
  );
}

export default App;
