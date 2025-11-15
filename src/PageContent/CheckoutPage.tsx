import { useMediaQuery } from 'usehooks-ts'
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import CheckoutModal from './CheckoutModal';

function CheckoutPage() {
   const isSmall = useMediaQuery('(max-width: 1100px)');
   const cartDetails = useContext(CartContext)!;
   const {cart} = cartDetails;
   let accessibleCartItems = cart.map((item) => JSON.parse(item));
   let totalPrice = 0;
   accessibleCartItems.forEach((item)=>{
       const priceNumber = parseInt(item.price.replace('$ ', '').replace(',', ''));
       totalPrice += priceNumber * item.qty;
   });
   const [isOpen, setIsOpen] = useState(false);
   
  return (
    <div className={`w-full bg-primary-white py-10 ${isSmall ? "px-5 flex-col gap-x-5" : "px-30"} flex gap-x-2 items-start`}>
        <CheckoutModal isOpen={isOpen}/>
        <form className={`${isSmall ? "w-full" : "w-[60%]"} bg-white rounded-xl px-10 py-10 flex flex-col gap-y-10`}>
            <h3 className='pb-5'>CHECKOUT</h3>
            
            {/* Billing details */}
            <div className={`w-full`}>
                <p className='text-[13px] font-bold text-primary-brown tracking-[0.93px]'>BILLING DETAILS</p>
                <div className={`w-full flex flex-wrap justify-between gap-y-3`}>
                    <div className={`w-[45%] flex flex-col gap-y-2 ${isSmall ? "w-full" : "min-w-[309px]"}`}>
                        <label className='text-[12px] font-bold'>Name</label>
                        <input className={`w-[45%] h-14 flex items-center border-2 px-3 focus:outline-none 
                        border-primary-white rounded-lg ${isSmall ? "w-full" : "min-w-[309px]"}`}
                            placeholder='John Doe'
                            type='text'/>
                    </div>
                    
                    <div className={`w-[45%] flex flex-col gap-y-2 ${isSmall ? "w-full" : "min-w-[309px]"}`}>
                        <label className='text-[12px] font-bold'>Email Address</label>
                        <input className={`w-[45%] h-14 flex items-center border-2 px-3 focus:outline-none 
                        border-primary-white rounded-lg ${isSmall ? "w-full" : "min-w-[309px]"}`}
                            placeholder='youremail@email.com'
                            type='email'/>
                    </div>

                    <div className={`w-[45%] flex flex-col gap-y-2 ${isSmall ? "w-full" : "min-w-[309px]"}`}>
                        <label className='text-[12px] font-bold'>Phone Number</label>
                        <input className={`w-[45%] h-14 flex items-center border-2 px-3 focus:outline-none 
                        border-primary-white rounded-lg ${isSmall ? "w-full" : "min-w-[309px]"}`}
                            placeholder='+233 55 555 5555'
                            type='number'/>
                    </div>
                </div>
            </div>

            {/* Shipping Info */}
            <div className={`w-full`}>
                <p className='text-[13px] font-bold text-primary-brown tracking-[0.93px]'>SHIPPING INFO</p>
                <div className={`w-full flex flex-wrap justify-between gap-y-3`}>
                    <div className={`w-full flex flex-col gap-y-2 ${isSmall ? "w-full" : "min-w-[309px]"}`}>
                        <label className='text-[12px] font-bold'>Your Address</label>
                        <input className={`w-[45%] h-14 flex items-center border-2 px-3 focus:outline-none 
                        border-primary-white rounded-lg ${isSmall ? "w-full" : "min-w-[309px]"}`}
                            placeholder='1137 Williams Avenue'
                            type='text'/>
                    </div>
                    <div className={`w-[45%] flex flex-col gap-y-2 ${isSmall ? "w-full" : "min-w-[309px]"}`}>
                        <label className='text-[12px] font-bold'>Zip Code</label>
                        <input className={`w-[45%] h-14 flex items-center border-2 px-3 focus:outline-none 
                        border-primary-white rounded-lg ${isSmall ? "w-full" : "min-w-[309px]"}`}
                            placeholder='100001'/>
                    </div>
                    <div className={`w-[45%] flex flex-col gap-y-2 ${isSmall ? "w-full" : "min-w-[309px]"}`}>
                        <label className='text-[12px] font-bold'>City</label>
                        <input className={`w-[45%] h-14 flex items-center border-2 px-3 focus:outline-none 
                        border-primary-white rounded-lg ${isSmall ? "w-full" : "min-w-[309px]"}`}
                            placeholder='New York'
                            type='text'/>
                    </div>
                    <div className={`w-[45%] flex flex-col gap-y-2 ${isSmall ? "w-full" : "min-w-[309px]"}`}>
                        <label className='text-[12px] font-bold'>Country</label>
                        <input className={`w-[45%] h-14 flex items-center border-2 px-3 focus:outline-none 
                        border-primary-white rounded-lg ${isSmall ? "w-full" : "min-w-[309px]"}`}
                            placeholder='United States'
                            type='text'/>
                    </div>
                </div>
            </div>

            {/* Payment options */}
            {isSmall ? 
                <div className='w-full flex flex-col gap-y-4'>
                    <p className='text-[13px] font-bold text-primary-brown tracking-[0.93px]'>PAYMENT OPTIONS</p>
                    <div className='w-full flex flex-col gap-y-2'>
                        <p className='text-[12px] font-bold'>Payment Method</p>
                        <div className='w-full h-14 rounded-lg border focus-within:border-primary-brown flex items-center gap-x-3'>
                            <label className='w-full h-14 rounded-lg flex items-center gap-x-3'>
                                <input type="radio" name="paymentMethod" value="e-Money" className='m-4 accent-primary-brown'/>
                                <p className='text-[14px] font-bold'>e-Money</p> 
                            </label>
                        </div>

                        <div className='w-full h-14 rounded-lg border focus-within:border-primary-brown flex items-center gap-x-3'>
                            <label className='w-full h-14 rounded-lg flex items-center gap-x-3'>
                                <input type="radio" name="paymentMethod" value="Cash on Delivery" className='m-4 accent-primary-brown'/>
                                <p className='text-[14px] font-bold'>Cash on Delivery</p> 
                            </label>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-y-2'>
                        <div className={`flex flex-col gap-y-2 w-full`}>
                            <label className='text-[12px] font-bold'>e-Money Number</label>
                            <input className={`h-14 flex items-center border-2 px-3 focus:outline-none 
                            border-primary-white rounded-lg w-full placeholder:font-bold`}
                                placeholder='238521993'
                                type='text'/>
                        </div>

                        <div className={`flex flex-col gap-y-2 w-full`}>
                            <label className='text-[12px] font-bold'>e-Money PIN</label>
                            <input className={`h-14 flex items-center border-2 px-3 focus:outline-none 
                            border-primary-white rounded-lg w-full placeholder:font-bold`}
                                placeholder='6891'
                                type='text'/>
                        </div>
                    </div>

                </div> : 
                <div className='w-full flex flex-col gap-y-4'>
                    <p className='text-[13px] font-bold text-primary-brown tracking-[0.93px]'>PAYMENT OPTIONS</p>
                    <div className='w-full flex justify-between'>
                        <div className='w-[49%]'>
                            <p className='text-[12px] font-bold'>Payment Method</p>
                        </div>
                        <div className='w-[49%] flex flex-col gap-y-4'>

                            <div className='w-full h-14 rounded-lg border focus-within:border-primary-brown flex items-center gap-x-3'>
                                <label className='w-full h-14 rounded-lg flex items-center gap-x-3'>
                                    <input type="radio" name="paymentMethod" value="e-Money" className='m-4 accent-primary-brown'/>
                                    <p className='text-[14px] font-bold'>e-Money</p> 
                                </label>
                            </div>

                            <div className='w-full h-14 rounded-lg border focus-within:border-primary-brown flex items-center gap-x-3'>
                                <label className='w-full h-14 rounded-lg flex items-center gap-x-3'>
                                    <input type="radio" name="paymentMethod" value="Cash on Delivery" className='m-4 accent-primary-brown'/>
                                    <p className='text-[14px] font-bold'>Cash on Delivery</p> 
                                </label>
                            </div>
                            
                        </div>
                    </div>
                    <div className='w-full flex justify-between'>

                        <div className={`w-[45%] flex flex-col gap-y-2`}>
                            <label className='text-[12px] font-bold'>e-Money Number</label>
                            <input className={`w-full h-14 flex items-center border-2 px-3 focus:outline-none 
                            border-primary-white rounded-lg placeholder:font-bold`}
                                placeholder='238521993'
                                type='text'/>
                        </div>

                        <div className={`w-[45%] flex flex-col gap-y-2`}>
                            <label className='text-[12px] font-bold'>e-Money PIN</label>
                            <input className={`w-full h-14 flex items-center border-2 px-3 focus:outline-none 
                            border-primary-white rounded-lg placeholder:font-bold`}
                                placeholder='6891'
                                type='text'/>
                        </div>
                    </div>
                </div>
            }
            
        </form>

        <div className={`${isSmall ? "w-full" : "w-[35%]"} h-auto bg-white rounded-xl flex flex-col p-6 gap-y-7`}>
            <h3 className='px-6'>SUMMARY</h3>
            {
                accessibleCartItems.map((item, index) =>{
                    return <div className="w-full h-16 flex justify-around items-center gap-x-4" key={index}>
                                <div className="w-16 h-16 rounded-lg bg-primary-white flex justify-center items-center">
                                    <img src={item.img} 
                                        className="w-16 rounded-lg bg-primary-white"/>
                                </div>
                                <div className="w-[60%] h-full flex flex-col justify-center gap-2">
                                    <p className="font-bold text-sm">{item.productName.split(' ')[0]}</p>
                                    <p className="opacity-50 text-sm">{item.price}</p>
                                </div>
                                <div>
                                    <div className="w-[10%] h-8 flex justify-end">
                                        <div className="w-[33.3%] h-full flex justify-center items-center opacity-50">
                                            <p className="text-[13px] font-bold">x{item.qty}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                })
            }

            <div className='w-full flex justify-between items-center'>
                <p className='opacity-50 text-sm'>TOTAL</p>
                <p className='font-bold text-sm'>$ {totalPrice}</p>
            </div>

            <div className='w-full flex justify-between items-center'>
                <p className='opacity-50 text-sm'>SHIPPING</p>
                <p className='font-bold text-sm'>$ 50</p>
            </div>

            <div className='w-full flex justify-between items-center'>
                <p className='opacity-50 text-sm'>VAT (INCLUDED)</p>
                <p className='font-bold text-sm'>$ {Math.round(totalPrice * 0.2)}</p>
            </div>

            <div className='w-full flex justify-between items-center'>
                <p className='text-sm font-bold'>GRAND TOTAL</p>
                <p className='text-sm font-bold'>$ {totalPrice + 50}</p>
            </div>

            <div className='w-full h-12 px-6'>
                <button className="w-full h-12 bg-primary-brown text-white text-sm tracking-[1px]"
                    onClick={() => setIsOpen(!isOpen)}>
                    <p className='font-bold'>CONTINUE & PAY</p>
                </button>
            </div>

        </div>
    </div>
  )
}

export default CheckoutPage