
import { Link } from "react-router-dom"
import ProductCard from "../pages/ProductCard"
function Home() {
  const addToCart = () => {

  }
  return (
    <div className='home'>

      <section></section>

      <h1>
        Latest Product
        <Link className='findmore' to={"/search"}>More</Link>
      </h1>

      <main>
        <ProductCard id="123" name="iPhone" stock={5} price={100000} cartHandler={addToCart} img="src\assets\iphone.jpg" />
      </main>

    </div>
  )
}

export default Home