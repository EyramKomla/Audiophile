import Banner from "../Components/Banner";
import ProductPurchaseCard from "../Components/ProductPurchaseCard";
import ProductCategoriesComponent from "../Components/ProductCategoriesComponent";
import BusinessStoryComponent from "../Components/BusinessStoryComponent";

let earphonesCollection = [
  {
    index: 1,
    img: "src/assets/Earphones/YX1 WIRELESS EARPHONES.png",
    isNew: true,
    productName: "YX1 WIRELESS EARPHONES",
    productDesc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  },
]

function EarphonesPage() {
  return (
    <div className="flex flex-col gap-y-5">
      <Banner title="EARPHONES"/>
      <div className="bg-secondary-white px-30 w-full flex flex-col gap-y-45 pt-25 pb-50">

        {earphonesCollection.map((item) => {
          return <ProductPurchaseCard
                    img={item.img}
                    isNew={item.isNew}
                    productName={item.productName}
                    productDesc={item.productDesc}
                    isReverse={item.index % 2 === 0}
                  />
        })}

        <ProductCategoriesComponent/>
        <BusinessStoryComponent/>
      </div>
    </div>
  )
}

export default EarphonesPage