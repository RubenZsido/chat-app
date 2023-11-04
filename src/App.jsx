import { useState } from "react";
import "./App.css";
import { auth, provider, logOut, signIn } from "./FirebaseConfig";

const App = () => {
  const [cred, setCred] = useState();
  const hangleLogin = async () => {
    const c = await signIn();
    setCred(c);
  };
  return (
    <div>
      <button onClick={hangleLogin}>Sign In</button>
      <button onClick={logOut}>Logout</button>
      <button onClick={() => console.log(cred)}>Log</button>
    </div>
  );
};

export default App;
