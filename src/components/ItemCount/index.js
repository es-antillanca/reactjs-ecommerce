import { Button } from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ItemCount({stock}) {
  const [quantity, setQuantity] = useState(1)


  const increment = () => {
    if (quantity >= stock) {
      toast.error("No puedes seleccionar más cantidad que el stock")
    } else {
      setQuantity( prev => prev + 1 )
      
    }
  }

  const decrement = () => {
    if (quantity <=1) {
      toast.error("No puedes seleccionar menos de 1 cantidad")
    } else {
      setQuantity(prev => prev -1)
      
    }
  }

  return (
    <div className="flex justify-between items-center gap-3">
      <Button size="sm" variant="solid" onClick={increment}>
      <Plus/>
      </Button>
      <p>
        {quantity}
      </p>
      <Button size="sm" variant="ghost" onClick={decrement}>
      <Minus/>
    </Button>

    </div>
  )


}