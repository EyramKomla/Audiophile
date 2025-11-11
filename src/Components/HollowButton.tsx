import { Link } from "react-router-dom"
type HollowButtonProps = {
    text:string,
    index: number,
    category: string,
}
function HollowButton({text, index, category}: HollowButtonProps) {
  return (
    <Link to={`/${category}/${index}`}>
      <button className="w-40 h-12 hover:bg-primary-black hover:text-white transition duration-300 border-2 flex justify-center items-center text-primary-black">
          <p className="text-xs font-semibold tracking-[2px]">{text}</p>
      </button>
    </Link>
  )
}

export default HollowButton