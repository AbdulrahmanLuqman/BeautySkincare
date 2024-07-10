import visa from "../../assets/visa.png"
import product from "../../assets/productsImage/joesonMilk.png"

export const Contact = ()=>{
    return(
        <section className="flex justify-between max-[1084px]:flex-col-reverse  ">
            <div className="px-[77px] max-[1074px]:px-[50px] max-[875px]:px-[20px] py-10 bg-[#FFF6ED]">
                <form  className="w-[500px] max-[535px]:w-full space-y-6">
                    <div className="space-y-6">
                        <label htmlFor="email" className="text-[20px] font-[500] text-[#302E2E]">Contact</label>
                        <div className="space-y-2">
                            <input type="text" id="email" placeholder="Email" className="w-[500px] max-[535px]:w-full h-[50px] outline-none bg-[#FFFFFF] py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] rounded-[5px]"/>
                            <div className="flex items-center gap-[3px]">
                                <input type="checkbox" />
                                <p className="text-[14px] text-[#A8A4A4]">Email me with news and offers</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <label htmlFor="email" className="text-[20px] font-[500] text-[#302E2E]">Delivery</label>

                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[transparent] rounded-tl-[5px] rounded-tr-[5px] h-[50px] w-[500px] max-[535px]:w-full">
                                    <div className="flex gap-[10px]">
                                        <input type="radio" name="delivery" />
                                        <p className="text-[14px] font-[500] text-[#5B5959]">Ship</p>
                                    </div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99984 9.00002L1.49984 8.00002H4.99984L4.59984 7.00002H1.33317L0.833171 6.00002H6.03317L5.63317 5.00002H0.739837L0.166504 4.00002H2.6665C2.6665 3.6464 2.80698 3.30726 3.05703 3.05721C3.30708 2.80716 3.64621 2.66669 3.99984 2.66669H11.9998V5.33335H13.9998L15.9998 8.00002V11.3334H14.6665C14.6665 11.8638 14.4558 12.3725 14.0807 12.7476C13.7056 13.1226 13.1969 13.3334 12.6665 13.3334C12.1361 13.3334 11.6274 13.1226 11.2523 12.7476C10.8772 12.3725 10.6665 11.8638 10.6665 11.3334H7.99984C7.99984 11.8638 7.78912 12.3725 7.41405 12.7476C7.03898 13.1226 6.53027 13.3334 5.99984 13.3334C5.4694 13.3334 4.9607 13.1226 4.58562 12.7476C4.21055 12.3725 3.99984 11.8638 3.99984 11.3334H2.6665V9.00002H1.99984ZM12.6665 12.3334C12.9317 12.3334 13.1861 12.228 13.3736 12.0405C13.5611 11.8529 13.6665 11.5986 13.6665 11.3334C13.6665 11.0681 13.5611 10.8138 13.3736 10.6262C13.1861 10.4387 12.9317 10.3334 12.6665 10.3334C12.4013 10.3334 12.1469 10.4387 11.9594 10.6262C11.7719 10.8138 11.6665 11.0681 11.6665 11.3334C11.6665 11.5986 11.7719 11.8529 11.9594 12.0405C12.1469 12.228 12.4013 12.3334 12.6665 12.3334ZM13.6665 6.33335H11.9998V8.00002H14.9732L13.6665 6.33335ZM5.99984 12.3334C6.26505 12.3334 6.51941 12.228 6.70694 12.0405C6.89448 11.8529 6.99984 11.5986 6.99984 11.3334C6.99984 11.0681 6.89448 10.8138 6.70694 10.6262C6.51941 10.4387 6.26505 10.3334 5.99984 10.3334C5.73462 10.3334 5.48027 10.4387 5.29273 10.6262C5.10519 10.8138 4.99984 11.0681 4.99984 11.3334C4.99984 11.5986 5.10519 11.8529 5.29273 12.0405C5.48027 12.228 5.73462 12.3334 5.99984 12.3334Z" fill="#611750"/></svg>
                                </div>
                                <div className="flex items-center justify-between py-[10px] px-[20px] border-x border-x-[0.3px] border-x-[#A8A4A4] border-b border-b-[0.3px] border-b-[#A8A4A4] bg-[#FFFFFF] rounded-bl-[5px] rounded-br-[5px] h-[50px] w-[500px] max-[535px]:w-full">
                                    <div className="flex gap-[10px]">
                                        <input type="radio" name="delivery" />
                                        <p className="text-[14px] font-[500] text-[#5B5959]">Pick up in store</p>
                                    </div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_148_78)"><path d="M1.3335 4.66665L4.2735 1.72665C4.39753 1.60187 4.54504 1.50287 4.70752 1.43536C4.86999 1.36786 5.04422 1.33317 5.22016 1.33331H10.7802C10.9561 1.33317 11.1303 1.36786 11.2928 1.43536C11.4553 1.50287 11.6028 1.60187 11.7268 1.72665L14.6668 4.66665M2.66683 7.99998V13.3333C2.66683 13.6869 2.80731 14.0261 3.05735 14.2761C3.3074 14.5262 3.64654 14.6666 4.00016 14.6666H12.0002C12.3538 14.6666 12.6929 14.5262 12.943 14.2761C13.193 14.0261 13.3335 13.6869 13.3335 13.3333V7.99998" stroke="#A8A4A4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0002 14.6666V12C10.0002 11.6463 9.85969 11.3072 9.60964 11.0572C9.35959 10.8071 9.02045 10.6666 8.66683 10.6666H7.3335C6.97987 10.6666 6.64074 10.8071 6.39069 11.0572C6.14064 11.3072 6.00016 11.6463 6.00016 12V14.6666M1.3335 4.66663H14.6668V6.66663C14.6668 7.02025 14.5264 7.35939 14.2763 7.60943C14.0263 7.85948 13.6871 7.99996 13.3335 7.99996C12.944 7.97852 12.572 7.83112 12.2735 7.57996C12.1939 7.52248 12.0983 7.49153 12.0002 7.49153C11.902 7.49153 11.8064 7.52248 11.7268 7.57996C11.4283 7.83112 11.0563 7.97852 10.6668 7.99996C10.2773 7.97852 9.90532 7.83112 9.60683 7.57996C9.52728 7.52248 9.43164 7.49153 9.3335 7.49153C9.23535 7.49153 9.13971 7.52248 9.06016 7.57996C8.76168 7.83112 8.38967 7.97852 8.00016 7.99996C7.61065 7.97852 7.23865 7.83112 6.94016 7.57996C6.86062 7.52248 6.76497 7.49153 6.66683 7.49153C6.56869 7.49153 6.47304 7.52248 6.3935 7.57996C6.09501 7.83112 5.72301 7.97852 5.3335 7.99996C4.94399 7.97852 4.57198 7.83112 4.2735 7.57996C4.19395 7.52248 4.09831 7.49153 4.00016 7.49153C3.90202 7.49153 3.80638 7.52248 3.72683 7.57996C3.42834 7.83112 3.05634 7.97852 2.66683 7.99996C2.31321 7.99996 1.97407 7.85948 1.72402 7.60943C1.47397 7.35939 1.3335 7.02025 1.3335 6.66663V4.66663Z" stroke="#A8A4A4" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_148_78"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                </div>
                            </div>
                            <div className="py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[#FFFFFF] rounded-[5px] h-[50px] w-[500px] max-[535px]:w-full">
                                <input type="text" placeholder="Location" className="w-full h-full outline-none" />
                            </div>
                            <div className="flex justify-between gap-6 max-[535px]:flex-col">
                                <div className="py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[#FFFFFF] rounded-[5px] h-[50px] w-[245px] max-[535px]:w-full">
                                    <input type="text" placeholder="First Name" className="w-full h-full outline-none" />
                                </div>
                                <div className="py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[#FFFFFF] rounded-[5px] h-[50px] w-[245px] max-[535px]:w-full">
                                    <input type="text" placeholder="Last Name" className="w-full h-full outline-none" />
                                </div>
                            </div>
                            <div className="py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[#FFFFFF] rounded-[5px] h-[50px] w-[500px] max-[535px]:w-full">
                                <input type="text" placeholder="Address" className="w-full h-full outline-none" />
                            </div>
                            <div className="py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[#FFFFFF] rounded-[5px] h-[50px] w-[500px] max-[535px]:w-full">
                                <input type="text" placeholder="Phone Number" className="w-full h-full outline-none" />
                            </div>
                            <div className="flex items-center gap-[3px]">
                                <input type="checkbox" />
                                <p className="text-[14px] text-[#A8A4A4]">Email me with news and offers</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-[20px] font-[500] text-[#302E2E]">Shipping Method</h2>
                        <div className="py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[transparent] rounded-[5px] h-[50px] w-[500px] max-[535px]:w-full flex justify-between items-center">
                            <p className="text-[13px] text-[#5B5959] font-[500]">Shipping</p>
                            <p className="text-[13px] text-[#4A4949] font-[600]"># 1,500.00</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h2 className="text-[20px] font-[500] text-[#302E2E]">Payment</h2>
                            <p className="text-[13px] text-[#A8A4A4]">All transactions are secure and encrypted.</p>
                        </div>
                        
                        <div className="py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[transparent] rounded-[5px] h-[50px] w-[500px] max-[535px]:w-full flex justify-between items-center">
                            <p className="text-[13px] text-[#5B5959] font-[500]">Paystack</p>
                            <img src={visa} alt="visa" />
                        </div>
                    </div> 

                    <div className="space-y-6">
                        <label htmlFor="email" className="text-[20px] font-[500] text-[#302E2E]">Delivery Address</label>

                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[transparent] rounded-tl-[5px] rounded-tr-[5px] h-[50px] w-[500px] max-[535px]:w-full">
                                    <div className="flex gap-[10px]">
                                        <input type="radio" name="deliveryAddress" />
                                        <p className="text-[14px] font-[500] text-[#5B5959]">Same as shipping</p>
                                    </div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99984 9.00002L1.49984 8.00002H4.99984L4.59984 7.00002H1.33317L0.833171 6.00002H6.03317L5.63317 5.00002H0.739837L0.166504 4.00002H2.6665C2.6665 3.6464 2.80698 3.30726 3.05703 3.05721C3.30708 2.80716 3.64621 2.66669 3.99984 2.66669H11.9998V5.33335H13.9998L15.9998 8.00002V11.3334H14.6665C14.6665 11.8638 14.4558 12.3725 14.0807 12.7476C13.7056 13.1226 13.1969 13.3334 12.6665 13.3334C12.1361 13.3334 11.6274 13.1226 11.2523 12.7476C10.8772 12.3725 10.6665 11.8638 10.6665 11.3334H7.99984C7.99984 11.8638 7.78912 12.3725 7.41405 12.7476C7.03898 13.1226 6.53027 13.3334 5.99984 13.3334C5.4694 13.3334 4.9607 13.1226 4.58562 12.7476C4.21055 12.3725 3.99984 11.8638 3.99984 11.3334H2.6665V9.00002H1.99984ZM12.6665 12.3334C12.9317 12.3334 13.1861 12.228 13.3736 12.0405C13.5611 11.8529 13.6665 11.5986 13.6665 11.3334C13.6665 11.0681 13.5611 10.8138 13.3736 10.6262C13.1861 10.4387 12.9317 10.3334 12.6665 10.3334C12.4013 10.3334 12.1469 10.4387 11.9594 10.6262C11.7719 10.8138 11.6665 11.0681 11.6665 11.3334C11.6665 11.5986 11.7719 11.8529 11.9594 12.0405C12.1469 12.228 12.4013 12.3334 12.6665 12.3334ZM13.6665 6.33335H11.9998V8.00002H14.9732L13.6665 6.33335ZM5.99984 12.3334C6.26505 12.3334 6.51941 12.228 6.70694 12.0405C6.89448 11.8529 6.99984 11.5986 6.99984 11.3334C6.99984 11.0681 6.89448 10.8138 6.70694 10.6262C6.51941 10.4387 6.26505 10.3334 5.99984 10.3334C5.73462 10.3334 5.48027 10.4387 5.29273 10.6262C5.10519 10.8138 4.99984 11.0681 4.99984 11.3334C4.99984 11.5986 5.10519 11.8529 5.29273 12.0405C5.48027 12.228 5.73462 12.3334 5.99984 12.3334Z" fill="#611750"/></svg>
                                </div>
                                <div className="flex items-center justify-between py-[10px] px-[20px] border-x border-x-[0.3px] border-x-[#A8A4A4] border-b border-b-[0.3px] border-b-[#A8A4A4] bg-[#FFFFFF] rounded-bl-[5px] rounded-br-[5px] h-[50px] w-[500px] max-[535px]:w-full">
                                    <div className="flex gap-[10px]">
                                        <input type="radio" name="deliveryAddress" />
                                        <p className="text-[14px] font-[500] text-[#5B5959]">Different from billing address</p>
                                    </div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_148_78)"><path d="M1.3335 4.66665L4.2735 1.72665C4.39753 1.60187 4.54504 1.50287 4.70752 1.43536C4.86999 1.36786 5.04422 1.33317 5.22016 1.33331H10.7802C10.9561 1.33317 11.1303 1.36786 11.2928 1.43536C11.4553 1.50287 11.6028 1.60187 11.7268 1.72665L14.6668 4.66665M2.66683 7.99998V13.3333C2.66683 13.6869 2.80731 14.0261 3.05735 14.2761C3.3074 14.5262 3.64654 14.6666 4.00016 14.6666H12.0002C12.3538 14.6666 12.6929 14.5262 12.943 14.2761C13.193 14.0261 13.3335 13.6869 13.3335 13.3333V7.99998" stroke="#A8A4A4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0002 14.6666V12C10.0002 11.6463 9.85969 11.3072 9.60964 11.0572C9.35959 10.8071 9.02045 10.6666 8.66683 10.6666H7.3335C6.97987 10.6666 6.64074 10.8071 6.39069 11.0572C6.14064 11.3072 6.00016 11.6463 6.00016 12V14.6666M1.3335 4.66663H14.6668V6.66663C14.6668 7.02025 14.5264 7.35939 14.2763 7.60943C14.0263 7.85948 13.6871 7.99996 13.3335 7.99996C12.944 7.97852 12.572 7.83112 12.2735 7.57996C12.1939 7.52248 12.0983 7.49153 12.0002 7.49153C11.902 7.49153 11.8064 7.52248 11.7268 7.57996C11.4283 7.83112 11.0563 7.97852 10.6668 7.99996C10.2773 7.97852 9.90532 7.83112 9.60683 7.57996C9.52728 7.52248 9.43164 7.49153 9.3335 7.49153C9.23535 7.49153 9.13971 7.52248 9.06016 7.57996C8.76168 7.83112 8.38967 7.97852 8.00016 7.99996C7.61065 7.97852 7.23865 7.83112 6.94016 7.57996C6.86062 7.52248 6.76497 7.49153 6.66683 7.49153C6.56869 7.49153 6.47304 7.52248 6.3935 7.57996C6.09501 7.83112 5.72301 7.97852 5.3335 7.99996C4.94399 7.97852 4.57198 7.83112 4.2735 7.57996C4.19395 7.52248 4.09831 7.49153 4.00016 7.49153C3.90202 7.49153 3.80638 7.52248 3.72683 7.57996C3.42834 7.83112 3.05634 7.97852 2.66683 7.99996C2.31321 7.99996 1.97407 7.85948 1.72402 7.60943C1.47397 7.35939 1.3335 7.02025 1.3335 6.66663V4.66663Z" stroke="#A8A4A4" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_148_78"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                                </div>
                                {/* dont forget to add a form if user clickes on the second option */}
                            </div>
                        </div>
                    </div>
                    <button className="py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] bg-[#611750] hover:bg-[#61175090] text-center text-[white] rounded-[6px] h-[50px] w-[500px] max-[535px]:w-full font-[500]">Pay Now</button>
                </form>
            </div>

            <div className="pr-[77px] max-[1105px]:pr-10 pl-[20px] space-y-10 max-[1084px]:w-fit">
                <div className="flex items-center gap-[29px] max-[1327px]:flex-col max-[1084px]:flex-row max-[549px]:flex-col">
                    <img src={product} alt="product" />
                    <div className="flex max-[413px]:flex-col items-center gap-[29px] ">
                        <div>
                            <h2 className="text-[18px] text-[#4A4949] font-[600]">Hydroquinone Cream USP 30g</h2>
                            <p className="text-[12.14px] text-[#5B5959]">For External use Only</p>
                        </div>
                        <p className="text-[19.9px] text-[#5B5959] font-[600]"># 10,000</p>
                    </div>               
                </div>
                <div className="space-y-6 w-full max-[1084px]:w-fit">
                    <div className="flex justify-between w-full max-[1084px]:gap-8">
                        <input type="text" id="email" placeholder="Email" className="max-[636px]:w-full max-[1084px]:w-[410px] max-[1264px]:w-full w-[410px] h-[50px] outline-none bg-[#FFFFFF] py-[10px] px-[20px] border border-[0.3px] border-[#A8A4A4] rounded-[5px]"/>
                        <button className="bg-[#FFC3BB] hover:bg-[#FFC3BB90] rounded-[5px] h-[50px] w-[130px] text-center">Apply</button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <p className="text-[#4A4949]">Subtotal</p>
                            <p className="text-[15.26px] font-[600]"># 10,500</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#4A4949]">Shipping</p>
                            <p className="text-[15.26px] font-[600]"># 1,500</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#302E2E] text-[18px]">Total:</p>
                            <p className="text-[17.48px] font-[600]"># 10,500</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}