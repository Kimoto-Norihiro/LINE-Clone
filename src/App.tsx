import React from 'react';

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Line from './components/Line';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default App;
