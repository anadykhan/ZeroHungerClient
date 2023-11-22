import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const SignIn = () => {
    const { user, signIn } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target

        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5 items-center">
              <div className="w-[30rem]">
                  <label className="block text-sm font-medium text-gray-600">Enter your Email:</label>
                  <input
                      type="text"
                      id="input"
                      name="email"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Type here..."
                  />
              </div>
              <div className="w-[30rem]">
                  <label className="block text-sm font-medium text-gray-600">Password:</label>
                  <input
                      type="password"
                      id="input"
                      name="password"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Type here..."
                  />
              </div>
              <button className="btn btn-primary w-[10rem]" type="submit">Sign In</button>
          </form>
    </div>
  )
}
export default SignIn