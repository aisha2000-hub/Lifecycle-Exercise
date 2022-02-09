import "./App.css";
import { useState, useEffect } from "react";
import { LoginBox } from "./components/LoginBox";

function App() {
  const userName = localStorage.getItem("user-name");
  const [user, setUser] = useState(userName);
  const [ isOnline ,setIsOnline] = useState(false)

  // console.log("App.js rerender");
   useEffect(() => {
     localStorage.setItem("user-name" , user)
     setIsOnline(true)
     setTimeout(setTimer , 5000)
     console.log(
       `isLoggedIn hat sich geändert! der neue Wert ist: ${user}`
     );
   }, [user]);
   
const setTimer =() => {
  setIsOnline(false) 
}

  return (
    <div className="App">
      <LoginBox
        onUserChanged={(newUser) => {
          setUser(newUser);
        }}
      />

      <h3>Angemeldeter User: {user}</h3>
      <p>der user ist: {isOnline === true? "online" : "offline"}</p>

    </div>
  );
}

export default App;
