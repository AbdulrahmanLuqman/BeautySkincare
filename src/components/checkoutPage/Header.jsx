import background from "../../assets/productsImage/skincareBg.png"
import logo from "../../assets/logo-white.png"


export const Header = ()=>{
    return(
        <header style={{backgroundImage: `url(${background})`, height: 200, backgroundSize: "cover", backgroundPosition: "center", padding: "30px 77px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <img src={logo} alt="logo" />
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.167 8.16671H18.667V7.00004C18.667 5.76236 18.1753 4.57538 17.3002 3.70021C16.425 2.82504 15.238 2.33337 14.0003 2.33337C12.7626 2.33337 11.5757 2.82504 10.7005 3.70021C9.82532 4.57538 9.33366 5.76236 9.33366 7.00004V8.16671H5.83366C5.52424 8.16671 5.22749 8.28962 5.0087 8.50842C4.78991 8.72721 4.66699 9.02395 4.66699 9.33337V22.1667C4.66699 23.095 5.03574 23.9852 5.69212 24.6416C6.3485 25.298 7.23873 25.6667 8.16699 25.6667H19.8337C20.7619 25.6667 21.6522 25.298 22.3085 24.6416C22.9649 23.9852 23.3337 23.095 23.3337 22.1667V9.33337C23.3337 9.02395 23.2107 8.72721 22.992 8.50842C22.7732 8.28962 22.4764 8.16671 22.167 8.16671ZM11.667 7.00004C11.667 6.3812 11.9128 5.78771 12.3504 5.35012C12.788 4.91254 13.3815 4.66671 14.0003 4.66671C14.6192 4.66671 15.2127 4.91254 15.6502 5.35012C16.0878 5.78771 16.3337 6.3812 16.3337 7.00004V8.16671H11.667V7.00004ZM21.0003 22.1667C21.0003 22.4761 20.8774 22.7729 20.6586 22.9917C20.4398 23.2105 20.1431 23.3334 19.8337 23.3334H8.16699C7.85757 23.3334 7.56083 23.2105 7.34203 22.9917C7.12324 22.7729 7.00033 22.4761 7.00033 22.1667V10.5H9.33366V11.6667C9.33366 11.9761 9.45658 12.2729 9.67537 12.4917C9.89416 12.7105 10.1909 12.8334 10.5003 12.8334C10.8097 12.8334 11.1065 12.7105 11.3253 12.4917C11.5441 12.2729 11.667 11.9761 11.667 11.6667V10.5H16.3337V11.6667C16.3337 11.9761 16.4566 12.2729 16.6754 12.4917C16.8942 12.7105 17.1909 12.8334 17.5003 12.8334C17.8097 12.8334 18.1065 12.7105 18.3253 12.4917C18.5441 12.2729 18.667 11.9761 18.667 11.6667V10.5H21.0003V22.1667Z" fill="white"/></svg>
        </header>
    )
}