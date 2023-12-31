import axios from "axios"
import { useQuery } from "react-query"
import OrderList from "./orderList"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const OrderLists = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: orderListsData, isLoading: orderListsLoading } = useQuery({
        queryKey: ['orderlist'],
        queryFn: () => {
            return axios.get('http://localhost:5014/api/Order')
        }
    })
    const { data: userData, isLoading: userLoading } = useQuery({
        queryKey: ['userlist'],
        queryFn: () => {
            return axios.get('http://localhost:5014/api/User')
        }
    })

    if (orderListsLoading || userLoading) {
        return 'loading'
    }

    if(user){
        //console.log(userData.data)
        const databaseUser = userData.data.find(data => data.email === user.email)
        console.log(databaseUser.email)
        const filteredOrderLists = orderListsData.data.filter(data => data.restraunt === databaseUser.id)

        console.log(filteredOrderLists)

        //console.log(orderListsData.data)

        return (
            <div>
                <div className="grid grid-cols-6 gap-4 grid-rows-1 items-center border-2 p-3 font-bold">
                    <div>Name</div>
                    <div>Max preservation Time</div>
                    <div>Employee</div>
                    <dir>Acceptance</dir>
                </div>
                {
                    orderListsData.data.map(data => <OrderList data={data}></OrderList>)
                }
            </div>
        )
    }

    return <h1 className="text-2xl">No user logged in</h1>
    
}
export default OrderLists