import Banner from "../Components/Banner";
import ProductPurchaseCard from "../Components/ProductPurchaseCard";
import ProductCategoriesComponent from "../Components/ProductCategoriesComponent";
import BusinessStoryComponent from "../Components/BusinessStoryComponent";

let speakersCollection = [
  {
    index: 1,
    img: "src/assets/Speakers/ZX9 SPEAKER.png",
    isNew: true,
    productName: "ZX9 SPEAKER",
    productDesc: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  },
  {
    index: 2,
    img: "src/assets/Speakers/ZX7 SPEAKER.png",
    isNew: false,
    productName: "ZX7 SPEAKER",
    productDesc: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
  },
  
]

function SpeakersPage() {
  return (
    <div className="flex flex-col gap-y-5">
      <Banner title="EARPHONES"/>
      <div className="bg-secondary-white px-30 w-full flex flex-col gap-y-45 pt-25 pb-50">

        {speakersCollection.map((item) => {
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

export default SpeakersPage