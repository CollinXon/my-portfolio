import Image from "next/image";

const AboutMe = () => {

return (

<div id="about" className="target:text-white w-screen bg-slate-950  p-4 space-y-10 sm:space-y-0 sm:p-[115px] sm:px-[243px]  lg:px-32 flex-none sm:flex lg:gap-36">
<div className="w-full lg:w-[500px] mt-16">


<div className=" font-bold sm:text-lg md:text-2xl "><span className="text-white">About</span><span className="text-yellow-500"> Me.</span> </div>

<p className="text-white font-bold md:text-2xl">I&#39;m Collins Ennah</p>


<div className="text-gray-400 mt-4 md:text-lg ">I am a passionate front-end developer who is enthusiatic about building responsive web applications, user-friendly interfaces and also have an affinity for bringing ideas to life on the web. I have solid background in HTML, CSS, JavaScript, and modern frameworks like React and Next.js.
<div className="mt-2">
My expertise extends to working with tools like Tailwind CSS, Radix UI, Figma, and Git, allowing me to collaborate effectively with designers and developers to build polished, high-quality products.
</div>
<div className="mt-2 mb-4 ">
I&#39;m always open to exploring new technologies, collaborating & sharing knowledge with the developer community.
</div>
Let&#39;s connect and build something great!

</div>
<button className="bg-yellow-500 py-2 px-4"><a href="mailto:ennahcollins@gmail.com">Contact Me </a></button>





</div>


<div className="">

<Image src="/@capitalhaykayphotography-2.jpg" alt="Avatar" width={430}  height={0}   style={{ objectFit: 'cover' }} priority />



</div>


</div>





)



}

export default AboutMe;