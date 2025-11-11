import Banner from "../Components/Banner"
import BusinessStoryComponent from "../Components/BusinessStoryComponent"
import ProductCategoriesComponent from "../Components/ProductCategoriesComponent"
import ProductPurchaseCard from "../Components/ProductPurchaseCard"
import { productData } from "../Data/ProductDetails";
import { useMediaQuery } from "usehooks-ts";


const category = "headphones";
function HeadphonesPage() {
  const isSmall = useMediaQuery('(max-width: 700px)')
  return (
    <div className="flex flex-col gap-y-5">
      <Banner title="HEADPHONES"/>
      <div className={`bg-secondary-white ${isSmall ? "px-5" : "px-30"} w-full flex flex-col gap-y-45 pt-25 pb-50`}>

        {productData.headphones.map((item) => {
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

export default HeadphonesPage