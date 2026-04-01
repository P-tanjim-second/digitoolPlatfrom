import { Bold } from 'lucide-react';
import React, { useRef } from 'react';
import Products from './Products/Products';
import Carts from './Carts/Carts';

const Features = ({ cartNum, handleCartCount, cartProducts, active, setActive}) => {
    
    
    const blobRef = useRef(null);

    const handleClick =(val) => {
        setActive(val);
        const blob = blobRef.current
        blob.classList.remove("buttonSlide")
        void blob.offsetWidth;
        blob.classList.add("buttonSlide")
    }

    return (
        <div id='Products' className='w-11/12 mx-auto mt-28 text-center flex flex-col justify-center items-center space-y-5'>
            <div className='text-center'>
                <h1 className='text-[#101727] text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-18 xl:leading-20'>Premium Digital Tools</h1>
                <p className='text-[#627382] lg:w-[70%] mx-auto'>Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>
            </div>
            <div className="buttons flex gap-5 rounded-full border-2 text-white border-[#919191]/20 p-1 relative mb-10">
                <div ref={blobRef} className={`absolute top-1 bottom-1 buttonSlide ${active == "products" ? "left-1 right-[54%]" : "left-[54%] right-1"} bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full transition-all duration-300`}></div>
                <button className={`rounded-full cursor-pointer p-3 relative ${active == "products" ? "text-white" : "text-black"} transition-all`}>
                    <span className='relative z-10 p-3 pl-0' onClick={() => handleClick("products")}>Products</span>
                </button>
                <button className={`relative cursor-pointer z-10 rounded-full p-3 ${active == "carts" ? "text-white" : "text-black"} transition-all`} onClick={() => handleClick("carts")}>
                    Cart ({cartNum})
                </button>
            </div>

            {
                active === "products" ? <Products key={"active"} handleCartCount={handleCartCount} cartProducts={cartProducts}></Products> : <Carts key={"active"} handleCartCount={handleCartCount} cartProducts={cartProducts}></Carts>
            }
        </div>
    );
};

export default Features;