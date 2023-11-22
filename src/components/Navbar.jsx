import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"

const Navbar = () => {
  const { user, signIn, logout } = useContext(AuthContext)

  const handleSignOut = () => [
    logout()
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
  ]

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Order list</Link></li>
            <li><Link to='/orderform'>Order Form</Link></li>
            <li>
              {
                user ? <Link onClick={handleSignOut}>Sign Out</Link> : <Link to='/signin'>Sign In</Link>
              }
              </li> 
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar