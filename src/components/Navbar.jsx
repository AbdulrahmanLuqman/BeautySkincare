import { React, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export const Navbar = (props)=>{
    const location = useLocation()
    const [navLinks, setNavLinks] = useState(
        [
            {
                navName: "SKIN CONSULTATION",
                ariaLabel: "Go to Skin Consultation Page",
                goTo: "/"
            },
            {
                navName: "BRANDS",
                ariaLabel: "Go to Brands",
                goTo: "/"
            },
            {
                navName: "HAIR",
                ariaLabel: "Go to Hair",
                goTo: "/"
            },
            {
                navName: "MAKEUP",
                ariaLabel: "Go to Makeup",
                goTo: "/"
            },
            {
                navName: "FOR HIM",
                ariaLabel: "Go to For Him",
                goTo: "/"
            },
            {
                navName: "SKINCARE",
                ariaLabel: "Go to Skincare",
                goTo: "/skincare"
                // goTo: ["/skincare", "/skincare/add-to-cart"],
            },
            {
                navName: "BATH & BODY",
                ariaLabel: "Go to Bath and Body",
                goTo: "/"
            },
            {
                navName: "OFFERS",
                ariaLabel: "Go to Offers",
                goTo: "/"
            },
            {
                navName: "PERSONAL CARE",
                ariaLabel: "Go to Personal Care",
                goTo: "/"
            },
        ]
    )
    return(
        <nav className={`w-full px-[77px] max-[1074px]:px-[50px] max-[875px]:px-[20px] max-[875px]:fixed max-[875px]:bg-[#FDE2DF] max-[875px]:z-[900] max-[875px]:top-14 py-[31px] transition-all duration-700 ${!props.isNavOut ? "max-[875px]:left-[9000px]" : "left-0"}`}>
            <ul className="z-[900] flex flex-row justify-between max-[875px]:flex-col max-[875px]:gap-4 max-[875px]:items-center max-[875px]:border max-[875px]:py-5">
                {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <Link  to={link.goTo} aria-label={link.ariaLabel} className={`text-[14px] text-[#302E2E] ${location.pathname === link.goTo ? "font-semibold underline" : "" }`}>{link.navName}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}