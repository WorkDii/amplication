import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type BrandWhereInput = {
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  products?: ProductListRelationFilter;
};
