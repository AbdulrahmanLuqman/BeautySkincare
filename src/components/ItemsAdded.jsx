import { Link, useLocation } from "react-router-dom"
import { Product } from "./skincarePage/Product"

export const ItemsAdded = ()=>{
    const location = useLocation()
    const itemsAdded = location.state?.itemsAdded || [];
    const quantity = location.state?.quantity

    console.log(itemsAdded)
    console.log(quantity)

    // console.log(itemsAdded)
    return(
        <main>
            <section className="px-[77px] max-[1074px]:px-[50px] max-[875px]:px-[20px] space-y-8">
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
            <div className="flex gap-20 border-b pb-10 max-[1235px]:flex-col max-[972px]:flex-row max-[581px]:flex-col">
                <div className="">
                    <div className="flex bg-[#FAFAFA] gap-[400px] py-[24px] pl-[10px] pr-[42px] w-fit max-[972px]:hidden">
                        <h3 className="text-[14px] font-[500] text-[#4A4949]">PRODUCT</h3>
                        <div className="flex gap-[92px]">
                            <h3 className="text-[14px] font-[500] text-[#4A4949]">PRICE</h3>
                            <h3 className="text-[14px] font-[500] text-[#4A4949]">QUANTITY</h3>
                            <h3 className="text-[14px] font-[500] text-[#4A4949]">TOTAL</h3>
                        </div>
                    </div>
                   
                        <div className="space-y-4">
                            {
                                itemsAdded.map((product, index) => (
                                <div className="flex gap-[100px] max-[972px]:gap-[50px] py-[24px] pl-[10px] w-fit max-[972px]:items-center  max-[391px]:flex-col">
                                    <div className="flex items-center gap-6 max-[972px]:flex-col">
                                        <figure>
                                            <img width={120} src={product.photos[0] !== undefined ? `https://api.timbu.cloud/images/${product.photos[0].url}`: ""} alt={product.name} />
                                        </figure>
                                        <figcaption>
                                            <p className="text-[#4A4949] font-[600]">{product.name} </p>
                                            <p className="text-[12px] font-[#5B5959]">For External use Only</p>
                                        </figcaption>
                                    </div>
                                        <div className="flex items-center gap-[75px] max-[972px]:flex-col max-[972px]:gap-[20px]">
                                            <p className="text-[14px] font-[500] text-[#4A4949]"> <span className="hidden max-[972px]:inline">Price: </span> # 10,000</p>

                                            <span className="text-[14px]">{quantity}</span>

                                            <p className="text-[14px] font-[500] text-[#4A4949]"><span className="hidden max-[972px]:inline">Total: </span> # 10,000</p>
                                        </div>
                                </div>
                                    
                                ))
                            }
                    </div>
                </div>
                <div className="space-y-4 max-[1235px]:w-[400px] max-[442px]:w-full">
                    <h2 className="text-[24px] font-[500] text-[#302E2E] border-b border-b-2 border-b-[#302E2E] py-[4px] w-full">ORDER SUMMARY</h2>
                    {/* <div className="border-b py-[6px] w-full flex justify-between">
                        <p className="text-[18px] text-[#4A4949] font-[500]">Subtotal</p>
                        <p className="text-[18px] text-[#4A4949] font-[600]"># 10,000</p>
                    </div> */}
                    <div className="border-b py-[6px] w-full flex justify-between">
                        <p className="text-[18px] text-[#4A4949] font-[500]">Total</p>
                        <p className="text-[18px] text-[#4A4949] font-[600]"># 10,000</p>
                    </div>
                    <Link to="/checkout"><button className="text-[11px] w-full bg-[#FFC3BB] hover:bg-[#FFC3BB90] py-2 text-center font-[600] text-[11px] rounded-[8px]">PROCEED TO CHECK OUT</button></Link>
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