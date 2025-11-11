import { useMediaQuery } from "usehooks-ts"

type FeaturedImagesProps = {
    mainImg: string,
    smallImg1: string,
    smallImg2: string,
}
function FeaturedImages({mainImg, smallImg1, smallImg2}: FeaturedImagesProps) {
    const isSmall = useMediaQuery('(max-width: 700px)');
  return (
    <div className={`${isSmall ? "h-auto flex flex-col-reverse items-center gap-y-4" : "h-[592px] flex justify-between items-center"} w-full`}>
        <div className={`${isSmall ? "w-full h-[592px]" : "w-[43%] h-full"} flex flex-col justify-between`}>
            <div className="w-full h-[48%] rounded-lg bg-primary-white">
                <img src={smallImg1} className="w-full h-full object-cover object-center rounded-lg" alt="Product Image"/>
            </div>
            <div className="w-full h-[48%] rounded-lg bg-primary-white">
                <img src={smallImg2} className="w-full h-full object-cover object-center rounded-lg" alt="Product Image"/>
            </div>
        </div>
        <div className={`${isSmall ? "w-full h-full" : "w-[55%] h-full"} rounded-lg bg-primary-white`}>
            <img src={mainImg} className="w-full h-full object-contain object-center rounded-lg" alt="Product Image"/>
        </div>
    </div>
  )
}

export default FeaturedImages