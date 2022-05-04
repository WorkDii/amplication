import { Brand } from "../brand/Brand";
import { Order } from "../order/Order";

export type Product = {
  brand?: Brand | null;
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
