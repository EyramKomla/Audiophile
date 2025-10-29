import BorderlessButton from "./BorderlessButton"

type CategoryCardProps = {
    src:string,
    title:string,
}
function CategoryCard({src, title}:CategoryCardProps) {
  return (
    <div className='w-[350px] h-80 bg-primary-white flex flex-col items-center justify-around py-6 rounded-2xl'>
        <img src={src} className='w-40 filter drop-shadow-md'/>
        <h6>{title}</h6>
        <BorderlessButton/>
    </div>
  )
}

export default CategoryCard