import {lazy} from "react"; 


const CartPage = lazy(()=> import("./Cart"))
const HomePage = lazy(()=> import("./Home"))
const SearchPage = lazy(()=> import("./Search"))
export {
    CartPage, HomePage, SearchPage
}