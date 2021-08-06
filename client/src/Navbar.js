import React, { useContext }  from 'react'
import { UserContext } from "./context/user";
import { NavLink,  useHistory} from 'react-router-dom'

const Navbar = () => {
    const {user, setUser} = useContext(UserContext);
    console.log("navbar context", user)
    const history = useHistory()
  
    const logoutUser = () => {
      fetch('/logout', {
        method: 'DELETE'
      })
      .then(() => {
        setUser()
      })
      history.push('/')
    }

    if (user){
        return (
        <div>
            <h1>Hello {user.name}</h1>
            <br/>
            <button onClick={logoutUser} >Logout</button>
            <NavLink to="/commands">
                <button>Commands</button>
            </NavLink>
            <hr/>
        </div>
        )
    } else {
        return (
            <div>
                <br/>
                <NavLink to="/signup">
                    <button>Signup</button>
                </NavLink>
                <br/>

                <NavLink to="/login">
                    <button>Login</button>
                </NavLink>
                <hr/>
            </div>
        )
    }
}

export default Navbar
