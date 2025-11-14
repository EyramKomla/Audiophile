import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import { useEffect } from "react";

type CheckoutModalProps = {
    isOpen: boolean,
};

function CheckoutModal({isOpen}: CheckoutModalProps) {
    
    const {cart} = useContext(CartContext)!;
    let accessibleCartItems = cart.map((item) => JSON.parse(item));
    let totalPrice = 0;
    accessibleCartItems.forEach((item)=>{
        const priceNumber = parseInt(item.price.replace('$ ', '').replace(',', ''));
        totalPrice += priceNumber * item.qty;
    });

    useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        }, [isOpen]);

  return (
    isOpen && <div className="w-screen h-screen bg-black/50 fixed inset-0 text-white flex justify-center items-center z-50">
            <div className="w-[90vw] max-w-[540px] p-5 flex flex-col gap-y-4 h-auto max-h-[500px] overflow-y-scroll bg-white rounded-lg text-black">

                <div className="w-16 h-16 bg-primary-brown rounded-[50%] flex shrink-0 justify-center items-center">
                    <FaCheck size={22} color="white"/>
                </div>

                <h3 className="flex flex-wrap w-[60%]">THANK YOU FOR YOUR ORDER</h3>

                <p className="opacity-50">You will receive a confirmation email shortly.</p>

                <div className="w-full h-auto flex">
                    <div className="w-[60%] p-3 flex flex-col gap-y-3 bg-primary-white rounded-l-xl">
                        {
                            accessibleCartItems.map((item, index) =>{
                                return <div className="w-full h-[50px] flex justify-between items-center" key={index}>
                                    <img src={item.img} className="w-10 object-contain object-center"/>
                                    <div className="w-[70%] h-[50px] flex flex-col px-3">
                                        <p className="font-bold text-sm">{item.productName.split(' ')[0]}</p>
                                        <p className="opacity-50 font-bold text-sm">{item.price}</p>
                                    </div>
                                    <div className="w-[10%] h-full flex items-start">
                                        <p className="text-[13px] font-bold opacity-50">x{item.qty}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="bg-black w-[40%] rounded-r-xl flex flex-col justify-end p-7 text-white">
                        <div>
                            <p className="opacity-50 text-sm">GRAND TOTAL</p>
                            <p className="font-bold text-lg">${totalPrice.toLocaleString('en-US')}</p>
                        </div>
                    </div>
                </div>



                <button className="w-full h-12 flex shrink-0 justify-center items-center bg-primary-brown text-white"
                    onClick={() => window.location.href = "/"}>
                    <p className="font-bold text-sm tracking-[1px]">BACK TO HOME</p>
                </button>
            </div>
        </div>
  )
}

export default CheckoutModal;