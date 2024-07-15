import {React, useState, useEffect} from "react"
// import {productsData} from "../../data/skincareProductData"
// import { SkincareData } from "../../data/SkincareProductsData"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

// api key  8104ad78708a4e6680c4201aa3378d2320240713160836808258
// api id M11P68UGQP6B9Q4
// org id 09d3fa1d7caf45198c7d57ac510b4860

export const Product = ()=>{
    useEffect(()=>{
        fetch("https://timbu-get-all-products.reavdev.workers.dev/?organization_id=09d3fa1d7caf45198c7d57ac510b4860&reverse_sort=false&page=1&size=10&Appid=M11P68UGQP6B9Q4&Apikey=8104ad78708a4e6680c4201aa3378d2320240713160836808258")
        .then(res => res.json())
        .then(data => setProducts(data.items))
    }, [])



    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const productsPerPage = 5
    const startIndex = currentPage * productsPerPage
    const endIndex = startIndex + productsPerPage
    console.log(startIndex)
    console.log(endIndex)

    const currentProduct = products.slice(startIndex, endIndex)
    // console.log(products)
    
    const next = ()=>{
        if(endIndex < products.length)
            setCurrentPage(currentPage + 1)
    }

    const prev = ()=> {
        if(currentPage > 0){
            setCurrentPage(currentPage - 1)
        }
    }

    

    const navigate = useNavigate()
    const addToCart = (product)=>{
        navigate("/skincare/add-to-cart", {state: {product}})
    }
    const StarSvg = ()=>(
        <svg className="cursor-pointer" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.79003 1.10742C6.89548 0.782867 7.35464 0.782868 7.46009 1.10742L8.40204 4.00645C8.59068 4.58702 9.13171 4.9801 9.74216 4.9801H12.7904C13.1316 4.9801 13.2735 5.41679 12.9974 5.61737L10.5314 7.40907C10.0375 7.76789 9.83086 8.4039 10.0195 8.98448L10.9615 11.8835C11.0669 12.2081 10.6954 12.4779 10.4194 12.2774L7.9533 10.4857C7.45943 10.1268 6.79068 10.1268 6.29681 10.4857L3.83076 12.2774C3.55467 12.4779 3.18321 12.2081 3.28866 11.8835L4.23061 8.98448C4.41925 8.4039 4.2126 7.76789 3.71873 7.40907L1.25267 5.61737C0.976591 5.41679 1.11848 4.9801 1.45973 4.9801H4.50795C5.1184 4.9801 5.65943 4.58702 5.84807 4.00645L6.79003 1.10742Z" fill="white" stroke="#FFC3BB" stroke-width="1.05682"/></svg>
    )
    return(
        <section className="px-[77px] py-[70px] max-[1170px]:px-[40px]">
            <h2></h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[26px]">
                {
                    currentProduct.map((product) => (
                        <div key={product.index} className="w-full cursor-pointer h-[426px] bg-[#FFFFFF] shadow-lg shadow-gray-500/40 rounded-[10px] py-6 px-4 relative flex flex-col justify-between items-center">
                            <svg className="absolute top-4 bg-[#F8F8F8] hover:bg-[#94939340] p-[8px] rounded-[50%] right-4 cursor-pointer" width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1599 4.20571C9.31204 3.42612 8.2023 2.99344 7.05053 2.99341C6.44091 2.99404 5.83744 3.11523 5.27483 3.34999C4.71223 3.58476 4.2016 3.92846 3.77235 4.36133C1.94145 6.20001 1.94223 9.07591 3.7739 10.9068L9.47902 16.6119C9.6113 16.8446 9.86652 16.9948 10.1599 16.9948C10.2803 16.9936 10.3988 16.9642 10.5058 16.9089C10.6129 16.8537 10.7055 16.7741 10.7761 16.6765L16.5458 10.9068C18.3775 9.07514 18.3775 6.20001 16.5443 4.35822C16.1152 3.92614 15.605 3.58314 15.043 3.34891C14.4809 3.11469 13.8781 2.99387 13.2692 2.99341C12.1175 2.9936 11.0078 3.42625 10.1599 4.20571ZM15.444 5.45847C16.6602 6.68088 16.661 8.59037 15.4456 9.80656L10.1599 15.0923L4.87415 9.80656C3.65874 8.59037 3.65952 6.68088 4.8726 5.46158C5.46396 4.87333 6.23741 4.54963 7.05053 4.54963C7.86366 4.54963 8.63399 4.87333 9.22069 5.46003L9.60975 5.84908C9.68195 5.9214 9.7677 5.97878 9.86209 6.01793C9.95649 6.05708 10.0577 6.07723 10.1599 6.07723C10.2621 6.07723 10.3633 6.05708 10.4577 6.01793C10.552 5.97878 10.6378 5.9214 10.71 5.84908L11.0991 5.46003C12.2756 4.28585 14.2691 4.28897 15.444 5.45847Z" fill="#949393"/></svg>
                            <img src={product.photos[0] !== undefined ? `https://api.timbu.cloud/images/${product.photos[0].url}`: ""} alt={product.name} />
                            
                            <div className="w-full flex flex-col gap-[13px] items-start">
                                <div className="flex gap-[2px]">
                                    {
                                        [...Array(5)].map((_, index) => (
                                            <StarSvg key={index} />
                                        ))
                                    }
                                </div>    
                                <p className="text-[14.01px] text-[#4A4949] font-[600]">{product.name}</p>
                                <p className="text-[12.14px] font-[400] text-[#5B5959]">For External Use Only</p>
                            </div>
                            
                            <div className="flex justify-between items-center w-full">
                                <p className="text-[17px] text-[#1E1E1E] font-[600]"><span>#</span>{product.current_price[0].NGN[0]}</p>
                                <div tabIndex={0} className="bg-[#FFC3BB] hover:bg-[#FFC3BB90] flex gap-2 items-center rounded-[7px] py-[8px] px-[10px] cursor-pointer">
                                    <svg width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_71_217)"><path d="M8.91463 8.88794H7.19423V8.31447C7.19423 7.7061 6.95256 7.12264 6.52237 6.69246C6.09219 6.26227 5.50873 6.0206 4.90036 6.0206C4.29199 6.0206 3.70853 6.26227 3.27835 6.69246C2.84817 7.12264 2.60649 7.7061 2.60649 8.31447V8.88794H0.886089C0.733996 8.88794 0.588133 8.94836 0.480587 9.0559C0.373041 9.16345 0.312622 9.30931 0.312622 9.4614V15.7695C0.312622 16.2258 0.493878 16.6634 0.816516 16.9861C1.13915 17.3087 1.57675 17.4899 2.03302 17.4899H7.7677C8.22398 17.4899 8.66157 17.3087 8.98421 16.9861C9.30684 16.6634 9.4881 16.2258 9.4881 15.7695V9.4614C9.4881 9.30931 9.42768 9.16345 9.32014 9.0559C9.21259 8.94836 9.06673 8.88794 8.91463 8.88794ZM3.75343 8.31447C3.75343 8.01028 3.87426 7.71856 4.08936 7.50346C4.30445 7.28837 4.59618 7.16753 4.90036 7.16753C5.20455 7.16753 5.49627 7.28837 5.71137 7.50346C5.92646 7.71856 6.0473 8.01028 6.0473 8.31447V8.88794H3.75343V8.31447ZM8.34117 15.7695C8.34117 15.9216 8.28075 16.0675 8.1732 16.175C8.06566 16.2826 7.91979 16.343 7.7677 16.343H2.03302C1.88093 16.343 1.73507 16.2826 1.62752 16.175C1.51998 16.0675 1.45956 15.9216 1.45956 15.7695V10.0349H2.60649V10.6083C2.60649 10.7604 2.66691 10.9063 2.77446 11.0138C2.882 11.1214 3.02787 11.1818 3.17996 11.1818C3.33205 11.1818 3.47792 11.1214 3.58546 11.0138C3.69301 10.9063 3.75343 10.7604 3.75343 10.6083V10.0349H6.0473V10.6083C6.0473 10.7604 6.10771 10.9063 6.21526 11.0138C6.32281 11.1214 6.46867 11.1818 6.62076 11.1818C6.77286 11.1818 6.91872 11.1214 7.02627 11.0138C7.13381 10.9063 7.19423 10.7604 7.19423 10.6083V10.0349H8.34117V15.7695Z" fill="#4A4949"/></g><defs><clipPath id="clip0_71_217"><rect x="0.312622" y="-0.000823975" width="9.17548" height="23.5122" rx="3.4408" fill="white"/></clipPath></defs></svg>
                                    <button onClick={()=>addToCart(product)} className="text-[#4A4949] text-[11px]">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-[100px] mx-auto flex items-center justify-between">
                <button className="border rounded-[50%] p-2 bg-[#FFC3BB]" disabled={currentPage === 0} onClick={prev}><FaArrowLeft /></button>
                <button className="border rounded-[50%] p-2 bg-[#FFC3BB]" disabled={endIndex >= products.length} onClick={next}><FaArrowRight/></button>
            </div>
        </section>
    )
}