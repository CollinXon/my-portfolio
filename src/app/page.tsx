import Image from "next/image";


import Header from "./components/header";
import HeroSection from "./components/herosection";
import AboutMe from "./components/aboutme";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";
import MyProject from "./components/project";


export default function Home() {
  return (
   <div className=" min-h-screen w-screen overflow-x-hidden">
<Header/>
<HeroSection/>
<AboutMe/>
<MyProject/>
<ContactMe/>
<Footer/>


   </div>
  );
}
