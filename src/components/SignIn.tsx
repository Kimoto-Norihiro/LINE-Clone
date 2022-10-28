import React from 'react'

import { auth, provider } from "../firebase";
import { signInWithPopup } from '@firebase/auth';

import { Button } from '@mui/material';

function SignIn() {
	const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => alert(err.message))
  }

  return (
		<div>
			<Button onClick={signIn}>Sign in</Button>
		</div>
  )
}

export default SignIn