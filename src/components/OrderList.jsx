import axios from "axios"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

const OrderList = ({ data }) => {
  const { restraunt, employee, food, preservation, id, acceptance } = data
  const navigate = useNavigate()
  const { data: userData, isLoading: userLoading } = useQuery({
    queryKey: ['userlist'],
    queryFn: () => {
      return axios.get('http://localhost:5014/api/User')
    }
  })

  if (userLoading) {
    return 'Loading Users'
  }

  const handleUpdate = () => {
    navigate(`/updateorder/${id}`)
  }

  const handleAccept = () => {
    const acceptance = 'Yes'
    const newOrder = {id, restraunt, food, preservation, acceptance, employee}
    axios.put(`http://localhost:5014/api/order/${id}`, newOrder)
    console.log(newOrder)
  }

  const matchedRestaurant = userData.data.find((data) => data.id === restraunt)

  return (
    <div className="grid grid-cols-6 gap-4 grid-rows-1 items-center border-2 p-3">
      <div>{matchedRestaurant.name}</div>
      <div>{preservation} hr</div>
      <div>{employee}</div>
      <div>{acceptance}</div>
      <button className="btn btn-primary" onClick={handleAccept}>Accept</button>
      <button className="btn btn-primary" onClick={handleUpdate}>Assign Employee</button>
    </div>
  )
}
export default OrderList