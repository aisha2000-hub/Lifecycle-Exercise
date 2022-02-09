import { useState } from "react";

export const LoginBox = ({ onUserChanged = () => {} }) => {
  const [name, setName] = useState("");

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
        <button>Login</button>
      </div>
    </div>
  );
};
