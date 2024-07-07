import React from "react"
import background from "../../assets/productsImage/skincareBg.png"

export const Header = ()=>{
    return(
        <section style={{backgroundImage: `url(${background})`, height: 300, backgroundSize: "cover", backgroundPosition: "center", padding: "77px", display: "flex", flexDirection: "column", justifyContent: "end"}}>
            <h1 className="text-white font-bold text-[40px] w-fit">SKINCARE</h1>
            <h3 className="text-white font-semibold text-[20px] w-fit">Face oils and Serums</h3>
        </section>
    )
}