import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { FaWhatsapp, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

export const Footer = ()=>{
    return(
        <footer className="bg-[#FDE2DF] py-[40px] px-[77px] flex gap-8 flex-wrap justify-between items-start">
            <div className="w-[197px] flex flex-col gap-[24px]">
                <img src={Logo} alt="Logo" />

                <p className="text-[#302E2E]">Subscribe to our mailing list to get the new updates!</p>

                <div className="flex gap-[12px] items-center">
                    <a className="bg-[#302E2E] hover:bg-[#302E2E90] w-fit p-2 rounded-[50%]" href="http://" target="_blank"><FaWhatsapp className="text-white" /></a>
                    <a className="bg-[#302E2E] hover:bg-[#302E2E90] w-fit p-2 rounded-[50%]" href="http://x.com/luqmanola60" target="_blank"><FaTwitter className="text-white"/></a>
                    <a className="bg-[#302E2E] hover:bg-[#302E2E90] w-fit p-2 rounded-[50%]" href="http://" target="_blank"><FaFacebook className="text-white"/></a>
                    <a className="bg-[#302E2E] hover:bg-[#302E2E90] w-fit p-2 rounded-[50%]" href="http://" target="_blank"><FaInstagram className="text-white" /></a>
                </div>
            </div>
            <div>
                <h3 className="text-[#302E2E] font-bold space-y-[12px]">Information</h3>
                <div className="flex flex-col gap-[14px]">
                    <Link className="text-[#302E2E]">About us</Link>
                    <Link className="text-[#302E2E]">Contact us</Link>
                    <Link className="text-[#302E2E]">How we source</Link>
                    <Link className="text-[#302E2E]">How to identify fake product</Link>
                </div>
            </div>
            <div>
                <h3 className="text-[#302E2E] font-bold space-y-[12px]">Our Services</h3>
                <div className="flex flex-col gap-[14px]">
                    <Link className="text-[#302E2E]">Shipping & Delivery</Link>
                    <Link className="text-[#302E2E]">Refund & Return</Link>
                    <Link className="text-[#302E2E]">Book a consultation</Link>
                </div>
            </div>
            <div>
                <h3 className="text-[#302E2E] font-bold space-y-[12px]">My Account</h3>
                <div className="flex flex-col gap-[14px]">
                    <Link className="text-[#302E2E]">My Account</Link>
                    <Link className="text-[#302E2E]">My Cart</Link>
                    <Link className="text-[#302E2E]">Check out</Link>
                </div>
            </div>
        </footer>
    )
}