import { createBrowserRouter } from "react-router-dom";
import OrderLists from "./components/OrderLists";
import OrderForm from "./components/OrderForm";
import Root from "./components/Root";
import SignIn from "./components/SignIn";
import UpdateOrder from "./components/UpdateOrder";
import UserWrapper from "./components/UserWrapper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <OrderLists></OrderLists>
            },
            {
                path: "/orderform",
                element: <OrderForm></OrderForm>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/updateorder/:id',
                element: <UpdateOrder></UpdateOrder>
            }
        ]
    },
]);

export default router