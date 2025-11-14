
import { useMediaQuery } from 'usehooks-ts'
import CategoryCard from './CategoryCard'

function ProductCategoriesComponent() {
  const isSmall = useMediaQuery('(max-width: 700px)')
  return (
    <div className={`w-full h-80 mx-auto flex ${isSmall ? "h-250 flex-col justify-around items-center" : ""} justify-around items-center`}>
        <CategoryCard src="/assets/headphones/image-category-thumbnail-headphones.webp" title="HEADPHONES"/>
        <CategoryCard src="/assets/speakers/image-category-thumbnail-speakers.webp" title="SPEAKERS"/>
        <CategoryCard src="/assets/earphones/image-category-thumbnail-earphones.webp" title="EARPHONES"/>
    </div>
  )
}

export default ProductCategoriesComponent