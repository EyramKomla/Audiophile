
function BusinessStoryComponent() {
  return (
    <div className="w-full h-[588px] flex justify-center items-center">
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
  )
}

export default BusinessStoryComponent