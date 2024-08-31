"use client"
import Link from "next/link";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles






interface Project {id:number,
    title:string
                    description: string,
                    imageUrl: string,
                    liveUrl: string,
                    githubUrl: string
                            
}

const projects = [

    {id:1,
     title: "Chatter App",
     description : "Chatter is a blog site similar to Medium where users can create blogposts/articles to share their ideas and thought with others. This web app is a full stack project built with NextJS, Tailwind CSS, Typescript & Radix UI for the frontend & Firebase for the backend which handles User Authentication, database and data storage",
     imageUrl: "/images (1).jpeg",
     liveUrl: "https://chatterapp-ten.vercel.app/",
     githubUrl: "https://github.com/CollinXon/chatterapp",
    
    
    },


    {id: 2,
     title: "Greatstore BookApp",
     description: "Greatstore is an e-commerce webapp for a bookshop where clients can choose from a list of books, add to cart and checkout items. This web app was built with React and Tailwind CSS for the front end and Timbu Api cloud for the backend where the items/products are being managed ",
     imageUrl: "/bookapp.png",
     liveUrl: "https://greatstore-bookapp.vercel.app/",
     githubUrl: "https://github.com/CollinXon/Greatstore-bookapp"
    
    
    }





]





const MyProject = () => {

   



return(
<div id="projects" className="  bg-slate-900 text-white p-0 sm:p-10 space-y-10 ">

  
    <h1 className="text-center font-bold text-lg sm:text-3xl p-10 sm:p-0">MY<span className="text-yellow-500"> PERSONAL</span> PROJECTS</h1>

   
<div className="p-0 sm:p-6 w-11/12 sm:w-full sm:h-full flex-none space-y-20 sm:space-y-0 sm:flex gap-20 ">
<Carousel
      autoPlay
      infiniteLoop
      interval={3000} // Slide every 3 seconds
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
{projects.map((project)=> {

return ( <div key={project.id} className="  space-y-6  border-2 border-solid border-gray-100 p-6 sm:p-10  rounded-lg " >

    <img src={project.imageUrl} alt="thumbnail" className="w-full h-72 object-cover"/>
    <div className="text-xl font-bold text-gray-300">{project.title}</div>
    <div className="">{project.description}</div>
    <div className="flex justify-end items-center gap-10 ">
    <Link href={project.liveUrl} target="_blank"><Link1Icon className="w-6 h-6"/> </Link>
    <Link href={project.githubUrl} target="_blank"><GitHubLogoIcon className="w-6 h-6"/></Link>
     </div>
     
    </div>




)

})}

</Carousel>

</div>


 
</div>


)




}


export default MyProject;