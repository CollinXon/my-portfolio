import React, { createContext } from 'react';

import Image from "next/image";
const HeroSection = () => {

return (

<div className="w-screen bg-slate-900  p-4 space-y-10 sm:space-y-0 sm:p-[115px] sm:px-[243px]  lg:px-32 flex-none sm:flex lg:gap-36">

<div className="  w-full  lg:w-[500px] mt-16 ">

<p className="text-yellow-500 mb-6">Hello Welcome</p>

<p className="text-white font-bold md:text-2xl">I&#39;m Collins Ennah</p>


<div className="text-gray-400 mt-4 md:text-lg">It feels great to finally have you here,  kindly feel free to browse through my page and check out my work. 
<p className='mt-2'>I can&#39;t wait to connect with you.</p> </div>
<button className="bg-yellow-500 py-2 px-4"><a href="mailto:ennahcollins@gmail.com">Contact Me </a></button>





</div>


<div className="">

<Image src="/@capitalhaykayphotography-1.jpg" alt="Avatar" width={430}  height={0} style={{ objectFit: 'cover' }} priority />



</div>


</div>




)






}

export default HeroSection;