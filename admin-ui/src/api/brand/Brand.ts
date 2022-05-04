import { Product } from "../product/Product";

export type Brand = {
  createdAt: Date;
  id: string;
  isActive: boolean;
  name: string;
  products?: Array<Product>;
  updatedAt: Date;
};
