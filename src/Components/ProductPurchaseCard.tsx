import Button from "./Button"

type ProductPurchaseCardProps = {
    img: string,
    isNew: boolean,
    productName: string,
    productDesc: string,
    isReverse: boolean,
}

function ProductPurchaseCard({img, isNew, productName, productDesc, isReverse}: ProductPurchaseCardProps) {
  return (
    <div className={`w-full h-[560px] flex ${isReverse ? "flex-row-reverse" : ""} justify-between items-center`}>
        <div className='w-[48%] h-full rounded-lg bg-primary-white flex justify-center items-center'>
            <img src={img} alt="headphone image"
                    className="w-[350px] object-contain"/>
        </div>
        <div className='w-[48%] h-full flex justify-center items-center'>
            <div className="w-[540px] h-[560px] flex flex-col justify-center gap-y-6">
                {isNew && <p className="overline-text text-primary-brown">NEW PRODUCT</p>}
                <h2>{productName}</h2>
                <p className="opacity-50">
                    {productDesc}
                </p>
                <Button text="SEE PRODUCT"/>
            </div>
        </div>
    </div>
  )
}

export default ProductPurchaseCard