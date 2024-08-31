import { TwitterLogoIcon,InstagramLogoIcon,GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {

return (

<div  className="bg-slate-900 w-screen lg:w-full p-6 sm:p-12 ">

<div className="text-white flex flex-col text-center ">

   <p className="mt-8 font-bold"><span className="text-white">About</span><span className="text-yellow-500">Me.</span> </p>

   <p className="mt-5">My name is Collins Ennah, a web developer. I hope you had a great time been here. Let&#39;s connect with my social media handles below: </p>
</div>

<div className="flex justify-center text-yellow-500 mt-10 sm:mt-4 space-x-4 ">

<Link href="https://github.com/CollinXon" target="_blank"><GitHubLogoIcon className="w-8 h-8"/></Link>
<Link href="https://www.linkedin.com/in/collins-ennah-2901a2188/"  target="_blank"><LinkedInLogoIcon className="w-8 h-8"/></Link>
<Link  href="https://x.com/Collinslimz"  target="_blank"><TwitterLogoIcon className="w-8 h-8"/></Link>
<Link href="https://www.instagram.com/baba_econ/"  target="_blank" ><InstagramLogoIcon className="w-8 h-8"/></Link>

</div>


</div>




)


}

export default Footer;