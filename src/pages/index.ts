import {lazy} from "react"; 

const CartPage = lazy(()=> import("./Cart"))
const HomePage = lazy(()=> import("./Home"))
const SearchPage = lazy(()=> import("./Search"))
const Shipping = lazy(()=> import('./Shipping'))
const Login = lazy(()=> import("./Login"))
const MyOrders = lazy(()=> import("./MyOrders"))
const MyOrdersDetails = lazy(()=> import("./MyOrdersDetails"))

export {
    CartPage, HomePage, SearchPage, Shipping, Login, MyOrders, MyOrdersDetails
}