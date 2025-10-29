
import CategoryCard from './CategoryCard'

function ProductCategoriesComponent() {
  return (
    <div className="w-full h-80 mx-auto flex justify-around items-center">
        <CategoryCard src="src\assets\headphones\image-category-thumbnail-headphones.webp" title="HEADPHONES"/>
        <CategoryCard src="src\assets\Speakers\image-category-thumbnail-speakers.webp" title="SPEAKERS"/>
        <CategoryCard src="src\assets\Earphones\image-category-thumbnail-earphones.webp" title="EARPHONES"/>
    </div>
  )
}

export default ProductCategoriesComponent