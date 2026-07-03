import logo from "./assets/logo.png";

import {
  FaInstagram,
  FaTiktok
} from "react-icons/fa";

import {
  MdShoppingBag
} from "react-icons/md";

import {
  HiOutlineMail
} from "react-icons/hi";

const links = [

{
title:"Mercado Livre",
icon:<MdShoppingBag size={28}/>,
url:"https://www.mercadolivre.com.br/pagina/boldecommerce"
},

{
title:"Instagram",
icon:<FaInstagram size={26}/>,
url:"https://www.instagram.com/bolders.commerce"
},

{
title:"TikTok",
icon:<FaTiktok size={24}/>,
url:"https://www.tiktok.com/@bolders.commerce"
}

]

export default function App(){

return(

<div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black flex flex-col justify-between">

<div className="flex flex-col items-center pt-16">

<img
src={logo}
className="w-44 mb-6"
/>

<div className="w-full max-w-md px-6">

{links.map((item)=>(
<a

key={item.title}

href={item.url}

target="_blank"

rel="noreferrer"

className="flex items-center gap-5 bg-white/10 backdrop-blur-lg rounded-3xl px-6 py-5 mb-5 border border-white/10 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"

>

<div className="text-white">

{item.icon}

</div>

<div className="text-white text-lg font-semibold">

{item.title}

</div>

</a>

))}

</div>

</div>

<footer className="pb-10 text-center text-gray-400">

<div className="flex justify-center items-center gap-2">

<HiOutlineMail/>

administrativo@bolders.com.br

</div>

</footer>

</div>

)

}