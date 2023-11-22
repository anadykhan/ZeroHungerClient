import { Children, useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useNavigate } from "react-router-dom"

const UserWrapper = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()

    if(loading){
        return 'Loading'
    }
    
    if(user){
        return children
    }

    return <Navigate to='/signin'></Navigate>
}
export default UserWrapper