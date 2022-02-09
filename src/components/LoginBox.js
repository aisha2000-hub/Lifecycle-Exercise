import { useState ,useEffect} from "react";

export const LoginBox = ({ onUserChanged = () => {} }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`isLoggedIn hat sich geändert! Der neue Wert ist: ${name}`);
  }, [name]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={() =>{
           onUserChanged(name)
        }}
        >
          Login</button>
       
      </div>
    </div>
  );
};
