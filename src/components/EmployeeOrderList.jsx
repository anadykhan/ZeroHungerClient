import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../providers/AuthProvider"
import axios from "axios"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import OrderList from "./orderList"
import OrderListEmployee from "./OrderListEmployee"

const EmployeeOrderList = () => {
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
    const databaseUser = userData.data.find(data => data.email === user.email)
    console.log(databaseUser.id)
    //const filteredOrderLists = orderListsData.data.filter(data => data.restraunt === databaseUser.id)

    //console.log(filteredOrderLists)

    if (user) {
        return (
            <div>
                <div className="grid grid-cols-6 gap-4 grid-rows-1 items-center border-2 p-3 font-bold">
                    <div>Name</div>
                    <div>Max preservation Time</div>
                    <div>Employee</div>
                    <dir>Acceptance</dir>
                </div>
                {
                    //filteredOrderLists.data.map(data => <OrderList data={data}></OrderList>)

                    orderListsData.data.map((data) => {
                        console.log(data.id)
                        if(databaseUser.id == data.restraunt){
                            return <OrderListEmployee data={data}></OrderListEmployee>
                        }
                    })
                }
            </div>
        )
    }

    return <h1 className="text-2xl">No user logged in</h1>
}
export default EmployeeOrderList