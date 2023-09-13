import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../mocks/products";
import Example from "../ProductOverview";
import {Spinner} from "@nextui-org/react";

export default function ItemDetail() {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    
    getDetailProduct(parseInt(productId)).then(
      response => {
        setProduct(response)
      }
    ).catch(
      error => {
        console.error(error)
      }
    )
    
  }, [productId])

  return (
    <>
    {
        product ? (<Example product={product} />) :
          (<div className="h-[calc(100vh-5rem)] flex justify-center items-center">
             <Spinner size="lg" />
          </div>)
    }
    
    </>
  )
}