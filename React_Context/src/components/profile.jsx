import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function profile() {

      const {user} = useContext(UserContext)
      if(!user) return <h1>Not logged in</h1>

  return (
    <div id='frame'>
      <h2>Profile : {user.userName}</h2>
      <p>More content</p>
    </div>
  )
}

export default profile