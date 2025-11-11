import Banner from "../Components/Banner";
import ProductPurchaseCard from "../Components/ProductPurchaseCard";
import ProductCategoriesComponent from "../Components/ProductCategoriesComponent";
import BusinessStoryComponent from "../Components/BusinessStoryComponent";
import { productData } from "../Data/ProductDetails";
import { useMediaQuery } from "usehooks-ts";

const category = "earphones"

function EarphonesPage() {
  const isSmall = useMediaQuery('(max-width: 700px)')
  return (
    <div className="flex flex-col gap-y-5">
      <Banner title="EARPHONES"/>
      <div className={`bg-secondary-white ${isSmall ? "px-5" : "px-30"} w-full flex flex-col gap-y-45 pt-25 pb-50`}>

        {productData.earphones.map((item) => {
          return <ProductPurchaseCard
                    key={item.index}
                    id={item.index}
                    img={item.img}
                    isNew={item.isNew}
                    productName={item.productName}
                    productDesc={item.productDesc}
                    isReverse={item.index % 2 === 0}
                    prodCategory={category}
                  />
        })}

        <ProductCategoriesComponent/>
        <BusinessStoryComponent/>
      </div>
    </div>
  )
}

export default EarphonesPage