
import Image from "next/image";
import Typewriter from "@/effects/page";

import GitButton from "@/buttons/GitButton";
import LinkedinButton from "@/buttons/LinkedinButton";
import Form from "./form";

export default function Home() {
  return (
    <>
     
      <div className="min-h-56 rounded-xl w-96  mx-1 my-2 flex flex-col items-center justify-center">
        <Image
          alt="There should be an image of me"
          src="/pic.jpg"
          height={250}
          width={250}
          quality={100}
          className="rounded-xl"
        />
        <div className="flex flex-row justify-around mt-6  w-full ">
         
          
        </div>

        <div className="mt-1  p-3 flex justify-evenly w-full ">
          
          <LinkedinButton></LinkedinButton>
         
        </div>
      </div>
      <div className=" flex flex-col w-full flex-wrap ">
        <h1 className="text-4xl font-extrabold mt-2 mx-3">Manjot Singh</h1>
        
        <h1 className="mx-3 mt-2 text-slate-700">
          D
          <Typewriter
            text="eeveloper | Freelancer | Driving innovation | Solving Challenges"
            speed={30}
          ></Typewriter>
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
        <div className="flex flex-row flex-wrap">
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
              ●Next.js ●Flask ●Django ●React
            </div>
          </div>
      
      
      
        </div>
        <h1 className="mx-3 font-bold text-2xl mt-6">Projects</h1>
        <div className="mx-3 mt-3">
        ●Developed Backend for an LMS system using MERN stack    
        </div>
        <div className="mx-3 mt-3 ">
        ●Created a Github issue reccomender that takes user preferences and reccomends
        best issues to the said user.
        </div>
        <div className="mx-3 mt-3 ">
        ●Created an anonymous app that allows user to recieve anonymous feedback
        from the their users
        </div>
        <Form></Form>
      </div>
    </>
  );
}
