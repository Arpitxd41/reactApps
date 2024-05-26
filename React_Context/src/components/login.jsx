import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'
// to access data in here we need useContext hook here
function login() {
      const [userName, setUserName] = useState('')
      const [password, setPassword] = useState('')
      
      const {setUser} = useContext(UserContext)

      const handleSubmit = (e) => {
            e.preventDefault()
            setUser({userName, password})
      }
  return (
    <div id='form'>
      <h2>Login</h2>
      <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='enter username' />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter password' />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default login