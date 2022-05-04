import { ProductUpdateManyWithoutBrandsInput } from "./ProductUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  isActive?: boolean;
  name?: string;
  products?: ProductUpdateManyWithoutBrandsInput;
};
