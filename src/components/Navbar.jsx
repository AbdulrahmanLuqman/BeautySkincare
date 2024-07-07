import { React, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export const Navbar = ()=>{
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
        <nav className="w-full px-[77px] py-[31px]">
            <ul className="flex justify-between">
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