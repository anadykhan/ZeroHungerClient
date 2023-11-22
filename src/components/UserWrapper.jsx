import { Children, useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const UserWrapper = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return 'Loading'
    }
    
    if(user){
        return children
    }

    return "Loading"
}
export default UserWrapper