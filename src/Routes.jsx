import { createBrowserRouter } from "react-router-dom";
import OrderLists from "./components/OrderLists";
import OrderForm from "./components/OrderForm";
import Root from "./components/Root";
import SignIn from "./components/SignIn";
import UpdateOrder from "./components/UpdateOrder";
import UserWrapper from "./components/UserWrapper";
import EmployeeOrderList from "./components/EmployeeOrderList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <UserWrapper><EmployeeOrderList></EmployeeOrderList></UserWrapper>
            },
            {
                path: "/orderform",
                element: <UserWrapper><OrderForm></OrderForm></UserWrapper>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/updateorder/:id',
                element: <UpdateOrder></UpdateOrder>
            },
            {
                path: '/admin',
                element: <OrderLists></OrderLists>
            }
        ]
    },
]);

export default router