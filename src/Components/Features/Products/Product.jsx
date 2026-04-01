import React from 'react';
import { toast } from 'react-toastify';

const Product = ({ product, handleCartCount, cartProducts }) => {
    const badgeStyle = {
        bestSeller: ["bg-[#fef3c6]", "text-[#bb4d00]"],
        popular: ["bg-[#e1e7ff]", "text-[#7a2ef8]"],
        new: ["bg-[#dbfce7]", "text-[#0aa0ab]"]
    }

    const checkProduct = () => {
        const inCart = cartProducts.findIndex(cartProduct => cartProduct.name === product.name)
        return inCart === -1 ? "Buy Now": "Added to cart"
    }

    return (
        <div className="card w-96 bg-base-100 shadow-sm text-left">
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='w-15 h-15 p-3.5 rounded-full border-2 border-[#919191]/10'><img className='w-full' src={`/assets/products/${product.icon}`} /></div>
                    <span className={`px-3 w-fit h-fit text-[14px] rounded-full ml-auto font-medium ${product.tagType === "best-seller" ? badgeStyle.bestSeller.join(" ") : product.tagType === "popular" ? badgeStyle.popular.join(" ") : badgeStyle.new.join(" ")}`}>{product.tag}</span>
                </div>
                <div className="flex justify-between flex-col gap-3">
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className='text-[#627382]'>{product.description}</p>
                    <span className="text-xl"><span className='font-bold'>${product.price}</span><span className='text-[14px] text-[#627382]'>/{product.period}</span></span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        product.features.map((feature, i) => {
                            return (
                                <li key={i}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="mt-6">
                    <button className={`btn btn-block text-white rounded-full py-6 text-base ${checkProduct() === "Buy Now" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] cursor-pointer" : "bg-success pointer-events-none cursor-auto"}`} onClick={() => {
                        toast.success("Your Product Added to cart successfully", {autoClose: 1500})
                        handleCartCount(1, product, "add")
                    }}>{checkProduct()}</button>
                </div>
            </div>
        </div>
    );
};

export default Product;