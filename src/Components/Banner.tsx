import { useMediaQuery } from "usehooks-ts"

type text ={
    title:string,
}

function Banner({title}: text) {
  const isSmall = useMediaQuery('(max-width:700px)')
  return (
    <div className='w-full h-40 bg-primary-black text-primary-white flex justify-center items-center'>
        {isSmall ? <h4>{title}</h4> : <h2>{title}</h2>}
    </div>
  )
}

export default Banner