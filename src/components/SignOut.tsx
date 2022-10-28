import React from 'react'

import { Button } from '@mui/material'

import { signOut } from 'firebase/auth'
import { auth } from '../firebase'


function SignOut() {
	return (
    <div>
      <Button onClick={() => signOut(auth)}>Sign Out</Button>
    </div>
  )
}

export default SignOut