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

    if (orderListsLoading) {
        return 'loading'
    }
    
    //const filteredOrderLists = orderListsData.data.filter(data => data.email === user?.email)

    //console.log(filteredOrderLists)
    
  return (
    <div>
        {
              orderListsData.data.map(data => <OrderList data={data}></OrderList>)
        }
    </div>
  )
}
export default OrderLists