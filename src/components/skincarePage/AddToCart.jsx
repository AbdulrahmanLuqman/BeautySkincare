import { Link } from "react-router-dom"
import { Product } from "./Product"
import { useLocation } from "react-router-dom"
import { useState } from "react"

export const AddToCart = ()=>{
    const location = useLocation()
    const product = location.state.product
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = ()=>{
        
        setQuantity(q => q + 1)
    }
    const decreaseQuantity = ()=>{
        if(quantity <= 0){
            setQuantity(1)
        }
        setQuantity(q => q - 1)
    }

    console.log(product)
    return(
        <main>
            <section className="bg-[#FFFFFF] px-[200px] max-[1206px]:px-[100px] max-[1074px]:px-[50px] max-[875px]:px-[20px] py-[50px] flex flex-row items-center gap-[200px] max-[820px]:flex-col max-[820px]:gap-[100px]">
                <img src={product.image} alt={product.name} />
                <div className="space-y-10">
                    <div className="flex items-center gap-[13px]">
                        <div className="flex gap-[5px] items-center">
                            <Link className="text-[#A8A4A4] text-[14px] max-[384px]:text-[12px]">HOME</Link>
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.20011 1.09998L3.36011 1.99998L7.80011 6.49998L3.36011 11L4.20011 11.9L9.60011 6.49998L4.20011 1.09998Z" fill="#A8A4A4"/></svg>
                        </div>

                        <div className="flex gap-[5px] items-center">
                            <Link className="text-[#A8A4A4] text-[14px] max-[384px]:text-[12px]">SKINCARE</Link>
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.20011 1.09998L3.36011 1.99998L7.80011 6.49998L3.36011 11L4.20011 11.9L9.60011 6.49998L4.20011 1.09998Z" fill="#A8A4A4"/></svg>
                        </div>

                        <div className="flex gap-[5px] items-center">
                            <Link className="text-[#A8A4A4] text-[14px] max-[384px]:text-[12px]">FACE TREATMENT</Link>
                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.20011 1.09998L3.36011 1.99998L7.80011 6.49998L3.36011 11L4.20011 11.9L9.60011 6.49998L4.20011 1.09998Z" fill="#A8A4A4"/></svg>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-[36px] text-[#4A4949] leading-[34px] font-[500] max-[500px]:text-[25px] max-[306px]:text-[20px] max-[306px]:leading-[23px]">{product.name}</h2>
                            <p className="text-[#4A4949] leading-[24px] max-[306px]:text-[14px] max-[306px]:leading-[15px]">{product.summary}</p>
                            <p className="text-[23.33px] font-[600]"> <span>#</span> {product.price}</p>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-[#611750] w-full py-[4px] px-[8px] flex items-center gap-10 max-[384px]:gap-0 max-[384px]:justify-between rounded-[3px]">
                                <div className="bg-[#FFFFFF] flex gap-4 items-center py-[8px] px-[6px] max-[384px]:py-[4px] max-[384px]:gap-[2px]">
                                    <button onClick={decreaseQuantity} className="hover:bg-[#A8A4A490] rounded-[50%] w-6 h-6 max-[384px]:text-[14px]">-</button>
                                    <span>{quantity}</span>
                                    <button onClick={increaseQuantity} className="hover:bg-[#A8A4A490] rounded-[50%] w-6 h-6 max-[384px]:text-[14px]">+</button>
                                </div>
                                <Link to="/cart">
                                    <div tabIndex={0} className="flex cursor-pointer items-center gap-4">
                                        <p className="text-[#FFFFFF] font-semibold max-[384px]:text-[14px]">ADD TO CART</p>
                                    <p className="text-[#FFFFFF] font-bold max-[384px]:text-[14px]"><span>#</span>{product.price * quantity}</p>
                                </div>
                                </Link>
                                
                            </div>
                            <div className="flex items-center gap-[6px]">
                                <svg className="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99999 3.82922C9.092 2.9943 7.9035 2.53092 6.66999 2.53088C6.01711 2.53156 5.37081 2.66135 4.76828 2.91277C4.16574 3.1642 3.61888 3.5323 3.15916 3.99588C1.19833 5.96505 1.19916 9.04505 3.16083 11.0059L9.27083 17.1159C9.41249 17.3651 9.68583 17.5259 9.99999 17.5259C10.129 17.5246 10.2559 17.4931 10.3705 17.4339C10.4851 17.3748 10.5843 17.2895 10.66 17.1851L16.8392 11.0059C18.8008 9.04422 18.8008 5.96505 16.8375 3.99255C16.378 3.52981 15.8316 3.16246 15.2296 2.91162C14.6277 2.66078 13.9821 2.53138 13.33 2.53088C12.0965 2.53109 10.9081 2.99444 9.99999 3.82922ZM15.6592 5.17088C16.9617 6.48005 16.9625 8.52505 15.6608 9.82755L9.99999 15.4884L4.33916 9.82755C3.03749 8.52505 3.03833 6.48005 4.33749 5.17422C4.97083 4.54422 5.79916 4.19755 6.66999 4.19755C7.54083 4.19755 8.36583 4.54422 8.99416 5.17255L9.41083 5.58922C9.48815 5.66667 9.57999 5.72812 9.68108 5.77005C9.78218 5.81197 9.89055 5.83355 9.99999 5.83355C10.1094 5.83355 10.2178 5.81197 10.3189 5.77005C10.42 5.72812 10.5118 5.66667 10.5892 5.58922L11.0058 5.17255C12.2658 3.91505 14.4008 3.91838 15.6592 5.17088Z" fill="#111010"/></svg>
                                <span className="max-[384px]:text-[14px]">ADD TO WISHLIST</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#A8A4A4] text-[14px]">SKU: Rbs-1-716</p>
                            <p className="text-[#A8A4A4] text-[14px]">Categories: Skincare, Face Treatment</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Product />
            </section>
        </main>
    )
} 