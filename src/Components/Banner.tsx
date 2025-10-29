type text ={
    title:string,
}

function Banner({title}: text) {
  return (
    <div className='w-full h-40 bg-primary-black text-primary-white flex justify-center items-center'>
        <h2>{title}</h2>
    </div>
  )
}

export default Banner