import Banner from "../Components/Banner"
import BusinessStoryComponent from "../Components/BusinessStoryComponent"
import ProductCategoriesComponent from "../Components/ProductCategoriesComponent"
import ProductPurchaseCard from "../Components/ProductPurchaseCard"

let headphonesCollection = [
  {
    index: 1,
    img: "src/assets/headphones/X99 MARK II.png",
    isNew: true,
    productName: "XX99 MARK II HEADPHONES",
    productDesc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  },
  {
    index: 2,
    img: "src/assets/headphones/X99 MARK I.png",
    isNew: false,
    productName: "XX99 MARK I HEADPHONES",
    productDesc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  },
  {
    index: 3,
    img: "src/assets/headphones/XX59 HEADPHONES.png",
    isNew: false,
    productName: "XX59 HEADPHONES",
    productDesc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  }
]

function HeadphonesPage() {
  return (
    <div className="flex flex-col gap-y-5">
      <Banner title="HEADPHONES"/>
      <div className="bg-secondary-white px-30 w-full flex flex-col gap-y-45 pt-25 pb-50">

        {headphonesCollection.map((item) => {
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

export default HeadphonesPage