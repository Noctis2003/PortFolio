import Image from "next/image";
import Link from "next/link";
import GitButton from "@/buttons/GitButton";
import LinkedinButton from "@/buttons/LinkedinButton";
import Form from "./form";
export default function Home() {
  return (
    <>
     
      <div className="min-h-56 rounded-xl w-96  mx-1 my-2 flex flex-col items-center justify-start ">
        <Image
          alt="There should be an image of me"
          src="/pic.png"
          height={250}
          width={250}
          quality={100}
          className="rounded-xl "
        />
        <div className="flex flex-row justify-around mt-6  w-full ">
         
          
        </div>

        <div className="mt-1  p-3 flex justify-evenly w-full ">
          <GitButton></GitButton>
          <LinkedinButton></LinkedinButton>
         
        </div>
      </div>
      <div className=" flex flex-col w-full flex-wrap ">
        <h1 className="text-4xl font-extrabold mt-2 mx-3">Manjot Singh</h1>
        
        <h1 className="mx-3 mt-2 text-black">
            Developer | Freelancer | Driving innovation | Solving Challenges
        </h1>
        <h1 className="mx-3 mt-7">
          Bachelors Degree @{" "}
          <span className="font-bold text-xl">NIT Jalandhar</span>
        </h1>
        <h1 className="mx-3 font-bold text-2xl mt-7">
          Top Skills
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mx-6">
            Fullstack
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Automation and Scripting
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Machine Learning
          </span>
        </h1>
        <div className=" flex flex-row flex-wrap">
          <div className="flex flex-col  w-56 rounded-lg mx-3 mt-5  gap-2 justify-evenly">
            <h1 className="font-bold">Platforms</h1>
            <div className="text-sm text-slate-700 ">
              ●Linux ●Windows ●MacOS ●Docker ●kubernetes
            </div>
          </div>

          <div className="flex flex-col  w-56 rounded-lg mx-3 mt-5  gap-2 justify-evenly">
            <h1 className="font-bold">Tools</h1>
            <div className="text-sm text-slate-700 ">
              ●Vscode ●Git ●Github ●Jira ●Postman
            </div>
          </div>

          <div className="flex flex-col  w-56 rounded-lg mx-3 mt-5  gap-2 justify-evenly">
            <h1 className="font-bold">Languages</h1>
            <div className="text-sm text-slate-700 ">
              ●C++ ●Python ●Typescript ●Javascript ●C
            </div>
          </div>

          

          <div className="flex flex-col  w-56 rounded-lg mx-3 mt-5  gap-2 justify-evenly">
            <h1 className="font-bold">Frameworks</h1>
            <div className="text-sm text-slate-700 ">
              ●Next.js ●Flask ●Django ●Nestjs
            </div>
          </div>
      
      
      
        </div>
       
       <div className="mx-3 mt-3 bg-white  rounded-lg p-6 ">
  <h1 className="font-bold text-2xl mb-4 text-gray-800">Professional Experience</h1>
  <p className="text-gray-700 mb-3">
    Developed  a <strong>full-stack MVP</strong> designed to connect college students across India. Built with <strong>NestJS</strong> on the <Link className="text-blue-400" href="https://github.com/Noctis2003/nitap">backend</Link> and <strong>Next.js</strong> on the <Link className="text-blue-400" href="https://github.com/Noctis2003/nitapp">frontend</Link>, it enables students to collaborate on gigs, buy/sell items locally, and post thoughts or anonymous confessions—fostering both local and national student communities.
  </p>
  <p className="text-gray-700 mb-3">
    The app uses <strong>OAuth 2.0</strong> for secure authentication and leverages <strong>SSR</strong> (Server-Side Rendering) and <strong>ISR</strong> (Incremental Static Regeneration) for fast, SEO-friendly performance. <strong>Cloudinary</strong> is integrated for media uploads and optimization, ensuring efficient delivery of user-generated content.
  </p>
  <p className="text-gray-700">
    Users can collaborate on academic or creative projects, Post their thoughts, and participate in a local marketplace—all within a responsive, user-focused interface. The app combines real-time features with scalable architecture, providing a strong foundation for future enhancements like chat, gamification, and content moderation.
  </p>
</div>

        
        <Form></Form>
      </div>
    </>
  );
}
