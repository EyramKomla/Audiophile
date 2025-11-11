import { useMediaQuery } from "usehooks-ts"
import BlackButton from "../Components/BlackButton"
import Button from "../Components/Button"
import CategoryCard from "../Components/CategoryCard"
import HollowButton from "../Components/HollowButton"
import BusinessStoryComponent from "../Components/BusinessStoryComponent"


function Home() {
  const isMobile = useMediaQuery('(max-width: 1100px)');
  const isSmall = useMediaQuery('(max-width: 700px)');

  return (
    <>
        {
          isMobile ? 
          <div className="w-full h-[80vh] flex justify-center items-center bg-[url('/src/assets/headphones/hero-xx99.png')] bg-cover bg-center">
            <div className="w-[70%] h-[50%] flex flex-col items-center text-center justify-around text-primary-white">
              <p className="overline-text">NEW PRODUCT</p>
              {isSmall ? <h3>XX99 MARK II HEADPHONES</h3> : <h1>XX99 MARK II HEADPHONES</h1>}
              <p className="text-[15px]">
                  Experience natural, lifelike audio and exceptional build quality
                  made for the passionate music enthusiast.
              </p>
              <Button text="SEE PRODUCT" index={1} category="headphones"/>
            </div>
          </div>

          : <div className="w-full px-30">
              <div className="flex h-[630px] w-full bg-[url('/src/assets/headphones/image-hero.webp')] bg-contain bg-no-repeat">
                <div className="w-[40%] h-full p-3 text-primary-white flex flex-col gap-y-15 justify-center">
                  <p className="overline-text">NEW PRODUCT</p>
                  <h1>XX99 MARK II HEADPHONES</h1>
                  <p className="text-[15px]">
                      Experience natural, lifelike audio and exceptional build quality
                      made for the passionate music enthusiast.
                  </p>
                  <Button text="SEE PRODUCT" index={1} category="headphones"/>
                </div>                    
              </div>
            </div>
        }
        
        

        {/* Site content */}
        <div className="w-full bg-secondary-white min-h-screen pt-15 flex flex-col items-center gap-y-8 pb-10">
          
          {/* Category Secion */}
          <div className={`w-[80%] h-80 mx-auto flex ${isSmall ? "h-250 flex-col justify-around items-center" : ""} justify-around items-center`}>
            <CategoryCard src="\src\assets\headphones\image-category-thumbnail-headphones.webp" title="HEADPHONES"/>
            <CategoryCard src="\src\assets\Speakers\image-category-thumbnail-speakers.webp" title="SPEAKERS"/>
            <CategoryCard src="\src\assets\Earphones\image-category-thumbnail-earphones.webp" title="EARPHONES"/>
          </div>

          {/* Featured Speaker */}
          <div className={`w-[80%] h-[560px] bg-primary-brown rounded-lg flex text-primary-white
                          ${isMobile ? "flex-col items-center justify-center gap-y-10 h-[800px] pb-10" : ""}`}>
            <div className="h-full pl-5 flex items-end">
              <img src="\src\assets\Speakers\featured-speaker-image.png" alt="Featured Speaker" className="p-0" width={400}/>
            </div>
            <div className={`flex flex-col ${isMobile ? "items-center" : "pl-25"} justify-center gap-y-8 `}>
              <h1 className="text-center">
                ZX9 SPEAKER
              </h1>
              <p className="text-[15px] w-80">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <BlackButton text="SEE PRODUCT" index={1} category="speakers"/>
            </div>            
          </div>

          {/* 2nd Featured Speaker */}
          <div className="w-[80%] h-80 bg-[url(/src/assets/Speakers/2nd-featured-speaker.png)] 
              rounded-lg bg-cover bg-no-repeat bg-center flex">
            <div className="w-[40%] pl-5 h-full flex flex-col gap-y-5 justify-center items-center">
              <h3>ZX7 SPEAKER</h3>
              <HollowButton text="SEE PRODUCT" index={2} category="speakers"/>
            </div>
          </div>

          {/* Featured Earphone */}
          <div className={`w-[80%] h-80 flex justify-between items-center ${isSmall ? "flex-col gap-y-5 h-140" : ""}`}>
            <div className={`w-[48%] h-full flex flex-col gap-y-5 justify-center 
                            items-center rounded-lg bg-[url(/src/assets/Earphones/featured-earphones.png)] 
                            bg-center ${isSmall ? "w-[90%] h-[40%]" : ""}`}>
            </div>
            <div className={`w-[48%] h-full flex flex-col gap-y-5 justify-center 
                rounded-lg bg-primary-white ${isMobile ? "pl-10" : "pl-25"} ${isSmall ? "w-[90%] h-[40%]" : ""}`}>
                {
                  isSmall ? <h5>YX1 EARPHONES</h5> : <h3>YX1 EARPHONES</h3>
                }
                <HollowButton text="SEE PRODUCT" index={1} category="earphones"/>
            </div>
          </div>

          {/* Business Story */}
          <BusinessStoryComponent/>

        </div>
    </>
    
  )
}

export default Home