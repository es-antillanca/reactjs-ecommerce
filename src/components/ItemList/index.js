import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
//import toast from 'react-hot-toast';
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";


export default function ItemList({ products }) {

  const navigate = useNavigate();

  return (

    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
      {products ? (
        products.slice(0, 12).map((product) => (
          <Card shadow="sm" key={product.id} isPressable onPress={() => navigate(`/item/${product.id}`)}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={product.title}
                className="w-full object-cover h-[140px]"
                src={product.thumbnail}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{product.stock}</b>
              <p className="text-primary font-semibold">${product.price}</p>
            </CardFooter>
            <CardFooter>
              <ItemCount stock={product.stock}/>
            </CardFooter>
          </Card>
        ))
      
      ): ('Sin productos')}
    
    </div>
  );
}
