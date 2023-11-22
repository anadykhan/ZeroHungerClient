import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

const UpdateOrder = () => {
    const params = useParams()
    const { data: orderData, isLoading: orderLoading } = useQuery({
        queryKey: ['orderlist'],
        queryFn: () => {
            return axios.get('http://localhost:5014/api/order')
        }
    })

    if(orderLoading) {
        return 'loading'
    }

    //console.log(params.id, orderData.data)

    const matchedOrder = orderData.data.find((data) => data.id === params.id)

    //console.log(matchedOrder.id)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;

        const id = form.id.value
        const restraunt = form.restraunt.value 
        const food = form.food.value
        const preservation = form.preservation.value
        const employee = form.employee.value
        const acceptance = form.acceptance.value 

        const newOrder = {id, restraunt, food, preservation, employee, acceptance}
        console.log(newOrder)

        axios.put(`http://localhost:5014/api/order/${matchedOrder.id}`, newOrder)
    }

  return (
    <div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5 items-center">
              <div className="w-[30rem]">
                  <label className="block text-sm font-medium text-gray-600">Order id:</label>
                  <input
                      type="text"
                      id="id"
                      name="id"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Type here..."
                      defaultValue={matchedOrder.id}
                      disabled
                  />
              </div>
              <div className="w-[30rem]">
                  <label className="block text-sm font-medium text-gray-600">Enter your Restraunt:</label>
                  <input
                      type="text"
                      id="input"
                      name="restraunt"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Type here..."
                      defaultValue={matchedOrder.restraunt}
                      disabled
                  />
              </div>
              <div className="w-[30rem]">
                  <label className="block text-sm font-medium text-gray-600">Food name:</label>
                  <input
                      type="text"
                      id="input"
                      name="food"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Type here..."
                      defaultValue={matchedOrder.food}
                      disabled
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
                      defaultValue={matchedOrder.preservation}
                      disabled
                  />
              </div>
              <div className="w-[30rem]">
                  <label className="block text-sm font-medium text-gray-600">Assign Employee:</label>
                  <input
                      type="text"
                      id="input"
                      name="employee"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Type here..."
                      defaultValue={matchedOrder.employee}
                  />
              </div>
              <div className="w-[30rem]">
                  <label className="block text-sm font-medium text-gray-600">Acceptancy</label>
                  <input
                      type="text"
                      id="input"
                      name="acceptance"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Type here..."
                      defaultValue={matchedOrder.acceptance}
                      disabled
                  />
              </div>
              <button className="btn btn-primary w-[10rem]" type="submit">Order</button>
          </form>
    </div>
  )
}
export default UpdateOrder