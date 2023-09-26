import { useState, useEffect } from "react";
import { getProductByCategory, getProducts } from "../../mocks/products";
import ItemList from "../ItemList";
import SkeletonList from "../SkeletonList";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState();

  const {categoryId} = useParams();

  useEffect(() => {
    
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId).then(
      response => {
        setProducts(response)
      }
    ).catch(
      error => {
        console.log(error)
      }
    )
  }, [categoryId]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {greeting}
      </h1>
      {products ? <ItemList products={products} /> : <SkeletonList />}
    </div>
  );
}
