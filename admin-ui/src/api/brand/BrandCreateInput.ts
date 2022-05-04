import { ProductCreateNestedManyWithoutBrandsInput } from "./ProductCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  isActive: boolean;
  name: string;
  products?: ProductCreateNestedManyWithoutBrandsInput;
};
