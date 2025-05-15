import Image from "next/image";
import Link from "next/link";
import GitButton from "@/buttons/GitButton";
import LinkedinButton from "@/buttons/LinkedinButton";
import Form from "./form";

export default function Home() {
  return (
    <>
      <aside className="min-h-56 rounded-xl w-96  mx-1 my-2 flex flex-col items-center justify-startmax-md:mt-auto max-md:w-full">
        <Image
          alt="There should be an image of me"
          src="/pic.png"
          height={250}
          width={250}
          quality={100}
          className="rounded-xl "
        />

        <nav className="mt-1  p-3 flex justify-evenly w-full ">
          <GitButton></GitButton>
          <LinkedinButton></LinkedinButton>
        </nav>
      </aside>

      <main className=" flex flex-col w-full flex-wrap  max-md:w-full ">
        <header>
          <h1 className="text-4xl font-extrabold mt-2 mx-3 text-black">Manjot Singh</h1>
          <p className="mx-3 mt-2 text-black">
            Developer | Freelancer | Driving innovation | Solving Challenges
          </p>
        </header>

        <section>
          <h2 className="mx-3 mt-7 max-md:w-full text-black">
            Bachelors Degree @{" "}
            <span className="font-bold text-xl">NIT Jalandhar</span>
          </h2>
        </section>

        <section>
          <h2 className="mx-3 font-bold text-2xl mt-7 text-black">
            Top Skills
          </h2>
          <div className=" max-md:w-full max-md:flex max-md:flex-col max-md:gap-4 max-md:mt-4">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-gray-300 text-center">
              Automation and scripting
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-gray-300 text-center">
              Full Stack Development
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-gray-300 text-center">
              Fine Tuning and Optimization
            </span>
          </div>
        </section>

        <section className=" flex flex-row flex-wrap text-black">
          <article className="flex flex-col  w-56 rounded-lg mx-3 mt-5  gap-2 justify-evenly text-black">
            <h3 className="font-bold">Platforms</h3>
            <p className="text-sm text-slate-700 ">
              ●Linux ●Windows ●MacOS ●Docker ●kubernetes
            </p>
          </article>

          <article className="flex flex-col  w-56 rounded-lg mx-3 mt-5  gap-2 justify-evenly">
            <h3 className="font-bold">Tools</h3>
            <p className="text-sm text-slate-700 ">
              ●Vscode ●Git ●Github ●Jira ●Postman
            </p>
          </article>

          <article className="flex flex-col  w-56 rounded-lg mx-3 mt-5  gap-2 justify-evenly">
            <h3 className="font-bold">Languages</h3>
            <p className="text-sm text-slate-700 ">
              ●C++ ●Python ●Typescript ●Javascript ●C
            </p>
          </article>

          <article className="flex flex-col  w-56 rounded-lg mx-3 mt-5  gap-2 justify-evenly">
            <h3 className="font-bold">Frameworks</h3>
            <p className="text-sm text-slate-700 ">
              ●Next.js ●Flask ●Django ●Nestjs
            </p>
          </article>
        </section>

        <section className="md:mx-3 mt-3  rounded-lg p-6 max-md:w-full" aria-label="Professional Experience">
          <h2 className="font-bold text-2xl mb-4 text-gray-800">Professional Experience</h2>
          <p className="text-gray-700 mb-3">
            Developed  a <strong>full-stack MVP</strong> designed to connect college students across India. Built with <strong>NestJS</strong> on the <Link className="text-blue-400" href="https://github.com/Noctis2003/nitap">backend</Link> and <strong>Next.js</strong> on the <Link className="text-blue-400" href="https://github.com/Noctis2003/nitapp">frontend</Link>, it enables students to collaborate on gigs, buy/sell items locally, and post thoughts or anonymous confessions—fostering both local and national student communities.
          </p>
          <p className="text-gray-700 mb-3">
            The app uses <strong>OAuth 2.0</strong> for secure authentication and leverages <strong>SSR</strong> (Server-Side Rendering) and <strong>ISR</strong> (Incremental Static Regeneration) for fast, SEO-friendly performance. <strong>Cloudinary</strong> is integrated for media uploads and optimization, ensuring efficient delivery of user-generated content.
          </p>
          <p className="text-gray-700">
            Users can <strong>collaborate</strong> on academic or creative projects, <strong>Post</strong> their thoughts, and participate in a local <strong>marketplace</strong>-all within a responsive, user-focused interface. The app combines real-time features with scalable architecture, providing a strong foundation for future enhancements like chat, gamification, and content moderation.
          </p>
        </section>

        <section>
          <Form></Form>
        </section>
      </main>
    </>
  );
}
