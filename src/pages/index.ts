import {lazy} from "react"; 


const CartPage = lazy(()=> import("./Cart"))
const HomePage = lazy(()=> import("./Home"))
const SearchPage = lazy(()=> import("./Search"))
const Shipping = lazy(()=> import('./Shipping'))
export {
    CartPage, HomePage, SearchPage, Shipping
}