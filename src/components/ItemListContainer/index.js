import { useState, useEffect } from "react";
import { getProducts } from "../../mocks/products";
import ItemList from "../ItemList";
import SkeletonList from "../SkeletonList";
export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {greeting}
      </h1>
      {
        products ? (
          <ItemList products={products} />
        ):(<SkeletonList/>)
      }
      
    </div>
  );
}
