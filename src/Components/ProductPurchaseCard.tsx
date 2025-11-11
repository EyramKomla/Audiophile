import { useMediaQuery } from "usehooks-ts"
import Button from "./Button"

type ProductPurchaseCardProps = {
    img: string,
    isNew: boolean,
    productName: string,
    productDesc: string,
    isReverse: boolean,
    id: number,
    prodCategory: string,
}
type MobileProductPurchaseCardProps = {
    img: string,
    isNew: boolean,
    productName: string,
    productDesc: string,
    id: number,
    prodCategory: string,
}


function DesktopProductPurchaseCard({img, isNew, productName, productDesc, isReverse, id, prodCategory}: ProductPurchaseCardProps) {
    const isMobile = useMediaQuery('(max-width: 1100px)')
    return (
    <div className={`w-full h-[560px] flex ${isReverse ? "flex-row-reverse" : ""} ${isMobile ? "flex-col" : ""} justify-between items-center`}>
        <div className={`w-[48%] ${isMobile ? "w-[90%]" : ""} h-full rounded-lg bg-primary-white flex justify-center items-center`}>
            <img src={img} alt="headphone image"
                    className="w-[350px] object-contain"/>
        </div>
        <div className={`w-[48%] ${isMobile ? "w-[90%]" : ""} h-full flex justify-center items-center`}>
            <div className="w-[540px] h-[560px] flex flex-col justify-center gap-y-6">
                {isNew && <p className="overline-text text-primary-brown">NEW PRODUCT</p>}
                <h2>{productName}</h2>
                <p className="opacity-50">
                    {productDesc}
                </p>
                <Button text="SEE PRODUCT" index={id} category={prodCategory}/>
            </div>
        </div>
    </div>
  )
}
function MobileProductPurchaseCard({img, isNew, productName, productDesc, id, prodCategory}: MobileProductPurchaseCardProps) {
    const isMobile = useMediaQuery('(max-width: 1100px)');
    return (
    <div className={`w-full flex ${isMobile ? "flex-col h-[800px] gap-y-3" : "h-[560px] justify-between"} items-center`}>
        <div className={`w-[48%] ${isMobile ? "w-[90%] h-[60%]" : "bg-primary-white"} h-full rounded-lg  flex justify-center items-center`}>
            <img src={img} alt="headphone image"
                    className="w-[350px] object-contain"/>
        </div>
        <div className={`w-[48%] ${isMobile ? "w-[90%]" : ""} h-full flex justify-center items-center`}>
            <div className={`w-[540px]  ${isMobile ? "w-full h-[300px] items-center text-center" : "h-[560px]"} flex flex-col justify-center gap-y-6`}>
                {isNew && <p className="overline-text text-primary-brown">NEW PRODUCT</p>}
                <h2>{productName}</h2>
                <p className="opacity-50">
                    {productDesc}
                </p>
                <Button text="SEE PRODUCT" index={id} category={prodCategory}/>
            </div>
        </div>
    </div>
  )
}

function ProductPurchaseCard({img, isNew, productName, productDesc, isReverse, id, prodCategory}: ProductPurchaseCardProps){
    const isMobile = useMediaQuery('(max-width: 1100px)');
    return (
        isMobile ? <MobileProductPurchaseCard
                    img={img}
                    isNew={isNew}
                    productName={productName}
                    productDesc={productDesc}
                    id={id}
                    prodCategory={prodCategory}/> : 
                
                <DesktopProductPurchaseCard
                    img={img}
                    isNew={isNew}
                    productName={productName}
                    productDesc={productDesc}
                    isReverse={isReverse}
                    id={id}
                    prodCategory={prodCategory}/>
    )
}

export default ProductPurchaseCard