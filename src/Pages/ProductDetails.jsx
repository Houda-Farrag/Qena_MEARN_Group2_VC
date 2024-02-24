import { BreadCrumb } from "../Components/BreadCrumb/BreadCrumb";
import { Details } from "../Components/Details/Details";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";
import { Safety } from "../Components/Safety/Safety";
import { SellerData } from "../Components/SellerData/SellerData";

export const ProductDetails = () => {
  return (
    <div>
      <BreadCrumb />
      <ProductDisplay />
      <SellerData />
      <Safety/>
      <Details />
      <RelatedProducts/>
    </div>
  );
};
