import axios from "axios"
import { useQuery } from "react-query"

const OrderListEmployee = ({data}) => {
    const { restraunt, employee, food, preservation, id, acceptance } = data
    const { data: userData, isLoading: userLoading } = useQuery({
        queryKey: ['userlist'],
        queryFn: () => {
            return axios.get('http://localhost:5014/api/User')
        }
    })

    if (userLoading) {
        return 'Loading Users'
    }

    const matchedRestaurant = userData.data.find((data) => data.id === restraunt)

    return (
        <div className="grid grid-cols-6 gap-4 grid-rows-1 items-center border-2 p-3 [20rem]">
            <div>{matchedRestaurant.name}</div>
            <div>{preservation} hr</div>
            <div>{employee}</div>
            <div>{acceptance}</div>
        </div>
    )
}
export default OrderListEmployee