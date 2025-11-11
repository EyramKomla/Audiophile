import { BsDash, BsPlus, } from "react-icons/bs"
import AddToCartBtn from "../Components/AddToCartBtn"
import ItemsInBox from "../Components/ItemsInBox"
import FeaturedImages from "./FeaturedImages"
import ProductCategoriesComponent from "../Components/ProductCategoriesComponent"
import BusinessStoryComponent from "../Components/BusinessStoryComponent"
import { useParams } from "react-router-dom"
import { productData } from "../Data/ProductDetails"
import { useMediaQuery } from "usehooks-ts"
import { CartContext } from "../Context/CartContext"
import { useContext, useState } from "react";

type ItemProps = {
    item: string,
    qty: number,
}

function ProductDetailsPage() {
    const {category, id} = useParams();
    const isMobile = useMediaQuery('(max-width: 900px)');
    const isSmall = useMediaQuery('(max-width: 700px)');
    const cartDetails = useContext(CartContext)!;
    const {cart, setCart} = cartDetails;
    const [qty, setQty] = useState(1);
    

    function addToCart(){
            setCart([...cart, JSON.stringify(item)]);
    }

    const product = productData[category]?.find((item: any) => item.index === parseInt(id ?? "0"));
    console.log(product);
    console.log(cart);

    const item = {
        productName: product.productName,
        qty: qty,
        img: product.img,
        price: product.price,
    }

  return (
    <div className="bg-secondary-white p-20 flex flex-col gap-y-35">

        {/*Product Details*/}
        <div className={`${isSmall ? "h-auto flex flex-col gap-y-4" : "h-[560px] flex justify-between items-center"} w-full `}>
            <div className={`${isSmall ? "w-full h-auto" : "w-[48%] h-full"} rounded-lg bg-primary-white flex justify-center items-center`}>
                <img src={product.img} alt="headphone image"
                        className="w-[350px] object-contain"/>
            </div>
            <div className={`${isSmall ? "w-full h-[560px]" : "w-[48%] h-full"} flex justify-center items-center`} >
                <div className="w-[540px] h-[560px] flex flex-col justify-center gap-y-6">
                    {product.isNew && <p className="overline-text text-primary-brown">NEW PRODUCT</p>}
                    <h2>{product.productName}</h2>
                    <p className="opacity-50">
                        {product.productDesc}
                    </p>
                    <div className="flex flex-col gap-y-10">
                        <p className="text-[18px] font-bold tracking-[1.29px]">{product.price}</p>
                        <div className="flex items-center gap-x-4">
                            <div className="w-[120px] h-12 flex bg-primary-white">
                                <button onClick={() => setQty(qty - 1)} className="w-[33.3%] h-full flex justify-center items-center">
                                    <BsDash size={18}/>
                                </button>
                                <div className="w-[33.3%] h-full flex justify-center items-center">
                                    <p className="text-[13px] font-bold">{qty}</p>
                                </div>
                                <button onClick={() => setQty(qty + 1)} className="w-[33.3%] h-full flex justify-center items-center">
                                    <BsPlus size={18}/>
                                </button>
                            </div>
                            <button onClick={addToCart}>
                                <AddToCartBtn/>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        {/*Features*/}
        <div className={`${isMobile ? "w-full h-auto flex flex-col gap-y-4" : "w-full h-[318px] flex justify-between"}`}>
            <div className={`${isMobile ? "w-full min-h-[250px] h-auto py-4 flex flex-col gap-y-5" : "h-full w-[55%] flex flex-col gap-y-10"}`}>
                <h3>FEATURES</h3>
                <p className="text-[15px] opacity-50">
                    {product.features}
                </p>
            </div>
            <div className={`${isMobile ? "w-full min-h-[200px] h-auto flex justify-between" : 
                                "h-full w-[40%] flex flex-col gap-y-10"}
                                ${isSmall ? "w-full min-h-200px h-auto flex flex-col gap-y-4" : ""}`}>
                <h3>
                    IN THE BOX
                </h3>
                <div className={`${isSmall ? "w-full" : "w-[40%]"} flex flex-col gap-y-3`}>
                    {product.inTheBox.map((item: ItemProps) => <ItemsInBox key={item.item} item={item.item} qty={item.qty}/>)}
                </div>
            </div>
        </div>

        {/*Featured Images*/}
        <FeaturedImages mainImg={product.mainImg} 
                        smallImg1={product.smallImg1} 
                        smallImg2={product.smallImg2}/>

        <ProductCategoriesComponent/>
        <BusinessStoryComponent/>

    </div>
  )
}

export default ProductDetailsPage