import { Link } from "react-router-dom"
import productImage from "../../assets/productsImage/abbottCream.png"
import { Product } from "./Product"

export const ItemsAdded = ()=>{
    return(
        <main>
            <section className="px-[77px] space-y-8">
            <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-[5px]">
                    <Link className="text-[#A8A4A4] text-[14px]">Skincare</Link>
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.20011 1.09998L3.36011 1.99998L7.80011 6.49998L3.36011 11L4.20011 11.9L9.60011 6.49998L4.20011 1.09998Z" fill="#A8A4A4"/></svg>
                </div>
                <div className="flex items-center gap-[5px]">
                    <Link className="text-[#A8A4A4] text-[14px]">Your cart</Link>
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.20011 1.09998L3.36011 1.99998L7.80011 6.49998L3.36011 11L4.20011 11.9L9.60011 6.49998L4.20011 1.09998Z" fill="#A8A4A4"/></svg>
                </div>
            </div>
            <h2 className="text-[28px] font-[500]">YOUR CART</h2>
            <div className="flex gap-20 border-b">
                <div>
                    <div className="flex bg-[#FAFAFA] gap-[400px] py-[24px] pl-[10px] pr-[42px] w-fit">
                        <h3 className="text-[14px] font-[500] text-[#4A4949]">PRODUCT</h3>
                        <div className="flex gap-[92px]">
                            <h3 className="text-[14px] font-[500] text-[#4A4949]">PRICE</h3>
                            <h3 className="text-[14px] font-[500] text-[#4A4949]">QUANTITY</h3>
                            <h3 className="text-[14px] font-[500] text-[#4A4949]">TOTAL</h3>
                        </div>
                    </div>
                    <div className="flex gap-[100px] py-[24px] pl-[10px] w-fit">
                        <div className="flex items-center gap-6">
                            <figure>
                                <img width={120} src={productImage} alt="product" />
                            </figure>
                            <figcaption>
                                <p className="text-[#4A4949] font-[600]">Hydroquinone Cream USP 30g </p>
                                <p className="text-[12px] font-[#5B5959]">For External use Only</p>
                            </figcaption>
                        </div>
                        <div className="flex items-center gap-[75px]">
                            <p className="text-[14px] font-[500] text-[#4A4949]"># 10,000</p>
                            <div className="bg-[#FFFFFF] border border-[#A8A4A49E] rounded-[20px] flex gap-2 items-center py-[5px] px-[6px]">
                                <button className="hover:bg-[#A8A4A490] rounded-[50%] w-6 h-6 text-[14px]">-</button>
                                <span className="text-[14px]">1</span>
                                <button className="hover:bg-[#A8A4A490] rounded-[50%] w-6 h-6 text-[14px]">+</button>
                            </div>
                            <p className="text-[14px] font-[500] text-[#4A4949]"># 10,000</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-[24px] font-[500] text-[#302E2E] border-b border-b-2 border-b-[#302E2E] py-[4px] w-full">ORDER SUMMARY</h2>
                    <div className="border-b py-[6px] w-full flex justify-between">
                        <p className="text-[18px] text-[#4A4949] font-[500]">Subtotal</p>
                        <p className="text-[18px] text-[#4A4949] font-[600]"># 10,000</p>
                    </div>
                    <div className="border-b py-[6px] w-full flex justify-between">
                        <p className="text-[18px] text-[#4A4949] font-[500]">Total</p>
                        <p className="text-[18px] text-[#4A4949] font-[600]"># 10,000</p>
                    </div>
                    <button className="text-[11px] w-full bg-[#FFC3BB] hover:bg-[#FFC3BB90] py-2 text-center font-[600] text-[11px] rounded-[8px]">PROCEED TO CHECK OUT</button>
                    <button className="text-[11px] w-full border border-[#FFC3BB] hover:bg-[#FFC3BB90] py-2 text-center font-[600] text-[11px] rounded-[8px]">CONTINUE SHOPPING</button>
                </div>
            </div>
            </section>
            <section>
                <Product />
            </section>
        </main>
    )
}