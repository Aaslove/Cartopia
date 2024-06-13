import { useState } from "react";
import ProductCard from "./ProductCard";

function Search() {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState(1);

  const addToCart = () => { };

  const isPrevPage = page > 1;
  const isNextPage = page < 4;


  return (
    <div className="search-page">
      <aside>
        <h2>Filter</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (Hight to Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            max={100000}
            min={100}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="camera">Camera</option>
            <option value="phone">Phone</option>
            <option value="game">Game</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="serach-product-list">
          <ProductCard
            id="123"
            name="iPhone"
            stock={25}
            price={100000}
            cartHandler={addToCart}
            img="src\assets\iphone.jpg"
          />
        </div>

        <article>
          <button disabled={!isPrevPage} onClick={() => setPage((prev) => prev - 1)}>Prev</button>
          <span>{page} of {4}</span>
          <button disabled={!isNextPage} onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </article>
      </main>
    </div>
  );
}

export default Search;
