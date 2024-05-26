import React, {useState} from "react";

import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
      const [user, setUser] = useState(null) // This data will be available to all the children once we add user it can read user and with setuser it can write user
      return (
            <UserContext.Provider value={{user, setUser}}>
                  {children}
            </UserContext.Provider>
      )
}
export default UserContextProvider