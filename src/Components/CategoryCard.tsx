import { useMediaQuery } from "usehooks-ts"
import BorderlessButton from "./BorderlessButton"

type CategoryCardProps = {
    src:string,
    title:string,
}
function CategoryCard({src, title}:CategoryCardProps) {
  const isSmall = useMediaQuery('(max-width: 700px)');
  return (
    <div className={`w-[30%] h-80 bg-primary-white flex flex-col items-center justify-around py-6 rounded-2xl
                    ${isSmall ? "w-[90%]" : ""}`}>
        <img src={src} className='w-40 filter drop-shadow-md'/>
        <h6>{title}</h6>
        <BorderlessButton src={title.toLocaleLowerCase()}/>
    </div>
  )
}

export default CategoryCard