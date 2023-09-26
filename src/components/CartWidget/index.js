import { Badge, Button } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";

export default function CartWidget() {
  return (
    <div className="flex items-center gap-3">
      <Badge color="danger" content={0} shape="circle">
        <Button radius="full" isIconOnly variant="light">
          <ShoppingCart className="fill-current h-6 w-6" />
        </Button>
      </Badge>
    </div>
  );
}
