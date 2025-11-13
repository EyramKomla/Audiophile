import { useContext, useState } from "react"
import { BsCart3 } from "react-icons/bs"
import { CartContext } from "../Context/CartContext";
import { BsDash, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";


function CartModal() {

    const isSmall = useMediaQuery('(max-width: 500px)');
    const [isOpen, setIsOpen] = useState(false)
    const cartDetails = useContext(CartContext)!;
    const {cart, setCart} = cartDetails;
    let accessibleCartItems: any[] = [];
    cart.forEach((item)=>{
        accessibleCartItems.push(JSON.parse(item));
    })
    let totalPrice = 0;
    accessibleCartItems.forEach((item)=>{
        const priceNumber = parseInt(item.price.replace('$ ', '').replace(',', ''));
        totalPrice += priceNumber * item.qty;
    });
    
  return (
    <div className="z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
            <BsCart3 size={24}/>
        </button>
        {isOpen &&
            <div className="w-screen h-screen  fixed top-0 bottom-0 left-0 right-0 text-black">
                <div className="w-screen h-screen bg-black/50 absolute" onClick={() => setIsOpen(!isOpen)}></div>
                <div className={` ${isSmall ? "w-[300px]" : "w-[377px]"} h-auto max-h-[600px] bg-white rounded-lg absolute right-[10%] top-[10%]
                            flex flex-col gap-4 px-3 py-6 overflow-y-auto`}>
                    <div className="w-full h-[25px] flex justify-between">
                        <div className="flex gap-2">
                            <h6 className="">CART</h6>
                            <p>({accessibleCartItems.length})</p>
                        </div>
                        <button onClick={() => setCart([])}>
                            <p className="opacity-50">Remove all</p>
                        </button>
                    </div>
                    
                    {/*Cart items*/}
                    <div className="w-full flex flex-col gap-y-6">
                        {
                            accessibleCartItems.map((item, index) => {
                                return <div className="w-full h-16 flex justify-around items-center" key={index}>
                                            <div className="w-16 h-16 rounded-lg bg-primary-white flex justify-center items-center">
                                                <img src={item.img} 
                                                    className="h-16 rounded-lg bg-primary-white"/>
                                            </div>
                                            <div className="w-[90px] h-full flex flex-col gap-2">
                                                <p className="font-bold text-sm">{item.productName.split(' ')[0]}</p>
                                                <p className="opacity-50 text-sm">{item.price}</p>
                                            </div>
                                            <div>
                                                <div className="w-24 h-8 flex bg-primary-white">
                                                    <div className="w-[33.3%] h-full flex justify-center items-center">
                                                        <BsDash size={18}/>
                                                    </div>
                                                    <div className="w-[33.3%] h-full flex justify-center items-center">
                                                        <p className="text-[13px] font-bold">{item.qty}</p>
                                                    </div>
                                                    <div className="w-[33.3%] h-full flex justify-center items-center">
                                                        <BsPlus size={18}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            })
                        }
                    </div>

                    <div className="w-full h-6 flex justify-between items-center">
                        <p className="opacity-50 text-sm">TOTAL</p>
                        <p className="font-bold text-sm">$ {totalPrice}</p>
                    </div>
                    <div className="w-full h-12">
                        <Link to="/checkout">
                            <button onClick={() => setIsOpen(!isOpen)} className="w-full h-12 bg-primary-brown text-white text-sm tracking-[1px]">
                                CHECKOUT
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default CartModal