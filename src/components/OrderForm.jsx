import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../providers/AuthProvider"
import axios from "axios"
import { useQuery } from "react-query"

const OrderForm = () => {

    const { user, loading } = useContext(AuthContext)
    const { data: userData, isLoading: userLoading } = useQuery({
        queryKey: ['userlist'],
        queryFn: () => {
            return axios.get('http://localhost:5014/api/User')
        }
    })

    if (userLoading) {
        return 'loading'
    }

    if (!loading) {
        console.log(user)

        const handleSubmit = (event) => {
            event.preventDefault()  

            const form = event.target;

            const restraunt = matchedUser.id
            const food = form.food.value
            const preservation = form.preservation.value
            const employee = ""
            const acceptance = "No"

            const newOrder = { restraunt, food, preservation, employee, acceptance }
            console.log(newOrder)
        }

        const matchedUser = userData.data.find((data) => user.email === data.email)
        //console.log(matchedUser)

        return (
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5 items-center">

                    <div className="w-[30rem]">
                        <label className="block text-sm font-medium text-gray-600">Food name:</label>
                        <input
                            type="text"
                            id="input"
                            name="food"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Type here..."
                        />
                    </div>
                    <div className="w-[30rem]">
                        <label className="block text-sm font-medium text-gray-600">Max preservation time:</label>
                        <input
                            type="text"
                            id="input"
                            name="preservation"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Type here..."
                        />
                    </div>
                    <button className="btn btn-primary w-[10rem]" type="submit">Order</button>
                </form>
            </div>
        )
    }

    return 'error'
}

export default OrderForm