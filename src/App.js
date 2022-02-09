import "./App.css";
import { useState } from "react";
import { LoginBox } from "./components/LoginBox";

function App() {
  const userName = localStorage.getItem("user-name");
  const [user, setUser] = useState(userName);

  // console.log("App.js rerender");

  return (
    <div className="App">
      <LoginBox
        onUserChanged={(newUser) => {
          setUser(newUser);
        }}
      />

      <h3>Angemeldeter User: {user}</h3>
    </div>
  );
}

export default App;
