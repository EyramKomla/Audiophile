import BlackButton from "../Components/BlackButton"
import Button from "../Components/Button"
import CategoryCard from "../Components/CategoryCard"
import HollowButton from "../Components/HollowButton"


function Home() {
  return (
    <>
        <div className="w-full px-30">
          
            <div className="flex h-[630px] w-full bg-[url('src/assets/headphones/image-hero.webp')] bg-contain">
                <div className="w-[40%] h-full p-3 text-primary-white flex flex-col gap-y-15 justify-center">
                    <p className="overline-text">NEW PRODUCT</p>
                    <h1>XX99 MARK II HEADPHONES</h1>
                    <p className="text-[15px]">
                        Experience natural, lifelike audio and exceptional build quality
                        made for the passionate music enthusiast.
                    </p>
                    <Button text="SEE PRODUCT"/>
                    </div>                    
                </div>
            </div>
        

        {/* Site content */}
        <div className="w-full bg-secondary-white min-h-screen pt-15 flex flex-col items-center gap-y-8 pb-10">
          {/* Category Secion */}
          <div className="w-[80%] h-80 mx-auto flex justify-around items-center">
            <CategoryCard src="src\assets\headphones\image-category-thumbnail-headphones.webp" title="HEADPHONES"/>
            <CategoryCard src="src\assets\Speakers\image-category-thumbnail-speakers.webp" title="SPEAKERS"/>
            <CategoryCard src="src\assets\Earphones\image-category-thumbnail-earphones.webp" title="EARPHONES"/>
          </div>

          {/* Featured Speaker */}
          <div className="w-[80%] h-[560px] bg-primary-brown rounded-lg flex text-primary-white">
            <div className="h-full pl-5">
              <img src="src\assets\Speakers\featured-speaker-image.png" alt="Featured Speaker" className="h-full p-0"/>
            </div>
            <div className="flex flex-col justify-center gap-y-8 pl-25">
              <h1>
                ZX9 SPEAKER
              </h1>
              <p className="text-[15px] w-80">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <BlackButton text="SEE PRODUCT"/>
            </div>            
          </div>

          {/* 2nd Featured Speaker */}
          <div className="w-[80%] h-80 bg-[url(src/assets/Speakers/2nd-featured-speaker.png)] 
              rounded-lg bg-cover bg-no-repeat bg-bottom-right flex">
                <div className="w-[30%] h-full flex flex-col gap-y-5 justify-center items-center">
                  <h3>ZX7 SPEAKER</h3>
                  <HollowButton text="SEE PRODUCT"/>
                </div>
          </div>

          {/* Featured Earphone */}
          <div className="w-[80%] h-80 flex justify-between items-center">
            <div className="w-[48%] h-full flex flex-col gap-y-5 justify-center 
                items-center rounded-lg bg-[url(src/assets/Earphones/featured-earphones.png)] bg-center">
            </div>
            <div className="w-[48%] h-full flex flex-col gap-y-5 justify-center 
                pl-25 rounded-lg bg-primary-white">
                <h3>YX1 EARPHONES</h3>
                <HollowButton text="SEE PRODUCT"/>
            </div>
          </div>

          {/* Business Story */}
          <div className="w-[80%] h-[588px] flex justify-center items-center">
            <div className="w-[50%] h-full flex flex-col justify-center gap-y-5 pl-5 pr-20">
              <h2>
                BRINGING YOU THE <span className="text-primary-brown">BEST</span> AUDIO GEAR
              </h2>
              <p className="opacity-50">
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                rooms available for you to browse and experience a wide range of our products. Stop by our store 
                to meet some of the fantastic people who make Audiophile the best place to buy your portable 
                audio equipment.
              </p>
            </div>
            <img src="src\assets\story-image.png" alt="Story image" className="w-[40%] h-full object-cover object-left rounded-lg"/>
          </div>

        </div>
    </>
    
  )
}

export default Home