"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GitButton from "@/buttons/GitButton";
import LinkedinButton from "@/buttons/LinkedinButton";
import Form from "./form";
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);
  const [isAudioProjectExpanded, setIsAudioProjectExpanded] = useState(false);
  const [isMiscProjectExpanded, setIsMiscProjectExpanded] = useState(false);
  return (
    <>
      <aside className=" rounded-2xl w-96 mx-1 my-2 flex flex-col items-center justify-start max-md:mt-auto max-md:w-full">
        <div className="relative">
          <Image
            alt="There should be an image of me"
            src="/pic.png"
            height={250}
            width={250}
            quality={100}
            className="rounded-2xl ring-4 ring-slate-200/50 shadow-xl"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 to-transparent"></div>
        </div>

        <nav className="mt-4 p-3 flex justify-evenly w-full">
          <GitButton></GitButton>
          <LinkedinButton></LinkedinButton>
        </nav>
      </aside>

      <main className="flex flex-col w-full flex-wrap max-md:w-full overflow-y-visible overflow-x-hidden">
        <header className="mb-8">
          <h1 className="text-5xl max-md:mx-auto max-md:text-center font-black mt-2 min-md:mx-auto  min-md:mx-3 text-black ">
            Manjot Singh
          </h1>
          <p className="max-md:mx-auto max-md:w-4/5 mt-3 text-slate-600 text-lg font-medium">
            Developer • Freelancer • Driving Innovation • Solving Challenges
          </p>
        </header>

        <section className="mb-8 max-md:text-6xl">
          <h2 className=" max-md:text-3xl  mx-3 mt-7 max-md:w-full text-slate-700 text-lg flex flex-wrap max-md:justify-center">
            Bachelors Degree @ {" "}
            <span className=" max-md:text-3xl  max-md:w-full text-center font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              NIT Jalandhar
            </span>
          </h2>
        </section>

        <section className="mb-8">
          <h2 className="mx-3 font-bold text-3xl mt-7 text-slate-900 mb-4 max-md:text-center">
            Top Skills
          </h2>
          <div className=" max-md:flex max-md:flex-col max-md:items-center max-md:w-full max-md:gap-4 max-md:mt-4  mx-3">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 me-3 mb-2">
              Automation and Scripting
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 me-3 mb-2">
              Full Stack Development
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 me-3 mb-2">
              Fine Tuning and Optimization
            </span>
          </div>
        </section>

        <section className="flex flex-row flex-wrap text-slate-900 mb-8 max-md:justify-center">
          <article className="max-md:w-4/5 flex flex-col w-56 rounded-2xl mx-3 mt-5 p-6 gap-3 justify-evenly bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-lg text-slate-900">Platforms</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              • Linux • Windows • MacOS • Docker • Kubernetes
            </p>
          </article>

          <article className="flex max-md:w-4/5  flex-col w-56 rounded-2xl mx-3 mt-5 p-6 gap-3 justify-evenly bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-lg text-slate-900">Tools</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              • VSCode • Git • GitHub • Jira • Postman
            </p>
          </article>

          <article className="flex max-md:w-4/5  flex-col w-56 rounded-2xl mx-3 mt-5 p-6 gap-3 justify-evenly bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-lg text-slate-900">Languages</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              • C++ • Python • TypeScript • JavaScript • C
            </p>
          </article>

          <article className="flex max-md:w-4/5  flex-col w-56 rounded-2xl mx-3 mt-5 p-6 gap-3 justify-evenly bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="font-bold text-lg text-slate-900">Frameworks</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              • Next.js • Flask • Electron • NestJS
            </p>
          </article>
        </section>

        <section className="max-md:w-11/12 mt-6 rounded-2xl p-8 max-md:mx-auto bg-gradient-to-br from-slate-50 to-slate-100/50 backdrop-blur-sm border border-slate-200/50 shadow-xl mb-8" aria-label="Projects">
          <h2 className="font-black text-4xl mb-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
            Projects
          </h2>
          
          {/* Project 1: College Collaboration MVP */}
          <div className="mb-8 border-b border-slate-200/50 pb-8 last:border-b-0">
            <div className="flex flex-row items-center gap-4 mb-4">
              <h3 className="text-xl font-extrabold leading-tight bg-gradient-to-r from-emerald-600 via-red-600 to-cyan-600 bg-clip-text text-transparent">
                Fullstack MVP for intra and inter college collaboration across India
              </h3>
              <button 
                onClick={() => setIsProjectExpanded(!isProjectExpanded)}
                className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label={isProjectExpanded ? "Hide project details" : "Show project details"}
              >
                <svg 
                  className={`w-5 h-5 transform transition-transform duration-300 ${isProjectExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {isProjectExpanded && (
              <div className="pl-6 border-l-4 border-blue-400 bg-gradient-to-r from-blue-50/50 to-blue-100/30 p-6 rounded-r-2xl backdrop-blur-sm">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Developed a <strong className="text-slate-900">full-stack MVP</strong>
                   designed to connect college students across India. Built with 
                   <strong className="text-slate-900">NestJS</strong> on the 
                   <Link className="text-blue-600 hover:text-blue-800 underline 
                   decoration-2 underline-offset-2 font-semibold transition-colors" href="https://github.com/Noctis2003/nitappbackend"> backend</Link> and <strong className="text-slate-900">Next.js</strong> on the <Link className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 font-semibold transition-colors" href="https://github.com/Noctis2003/nitapp">frontend</Link>, it enables students to collaborate on gigs, buy/sell items locally, and post thoughts or anonymous confessions—fostering both local and national student communities.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  The app uses <strong className="text-slate-900">OAuth 2.0</strong> for secure authentication and leverages <strong className="text-slate-900">SSR</strong> (Server-Side Rendering) and <strong className="text-slate-900">ISR</strong> (Incremental Static Regeneration) for fast, SEO-friendly performance. <strong className="text-slate-900">Cloudinary</strong> is integrated for media uploads and optimization, ensuring efficient delivery of user-generated content.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Users can <strong className="text-slate-900">collaborate</strong> on academic or creative projects, <strong className="text-slate-900">post</strong> their thoughts, and participate in a local <strong className="text-slate-900">marketplace</strong>—all within a responsive, user-focused interface. The app combines real-time features with scalable architecture, providing a strong foundation for future enhancements like chat, gamification, and content moderation.
                </p>
              </div>
            )}
          </div>

          {/* Project 2: LSD Player */}
          <div className="mb-8 border-b border-slate-200/50 pb-8 last:border-b-0">
            <div className="flex flex-row items-center gap-4 mb-4">
              <h3 className="text-xl font-extrabold leading-tight bg-gradient-to-r from-yellow-600 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                LSD Player - Audio Visualiser for Windows
              </h3>
              <button 
                onClick={() => setIsAudioProjectExpanded(!isAudioProjectExpanded)}
                className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label={isAudioProjectExpanded ? "Hide project details" : "Show project details"}
              >
                <svg 
                  className={`w-5 h-5 transform transition-transform duration-300 ${isAudioProjectExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {isAudioProjectExpanded && (
              <div className="pl-6 border-l-4 border-purple-400 bg-gradient-to-r from-purple-50/50 to-purple-100/30 p-6 rounded-r-2xl backdrop-blur-sm">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Developed <strong className="text-slate-900">    <Link className="text-blue-600 hover:text-blue-800 underline 
                   decoration-2 underline-offset-2 font-semibold transition-colors" href="https://github.com/Noctis2003/illusionary">LSD player</Link></strong>, a deeply psychedelic audio visualizer for Windows built with <strong className="text-slate-900">Electron</strong>. The application leverages <strong className="text-slate-900">yt-dlp</strong> for audio streaming and <strong className="text-slate-900">Butterchurn</strong> for mesmerizing visual effects, creating an immersive audiovisual experience.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  The architecture includes an <strong className="text-slate-900">Express reverse proxy server</strong> to eliminate CORS issues when streaming audio from various sources, and implements <strong className="text-slate-900">Zustand</strong> for efficient global audio instance management, ensuring seamless state synchronization across the application.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  The player can stream <strong className="text-slate-900">ad-free music</strong> from virtually any source on the internet, providing users with unlimited access to their favorite tracks while displaying stunning, synchronized visual patterns that react to the audio in real-time.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  With its <strong className="text-slate-900">psychedelic nature</strong>, LSD Player transforms any listening session into a captivating visual journey, featuring fluid animations, colorful patterns, and dynamic effects that pulse and flow with the rhythm of the music.
                </p>
              </div>
            )}
          </div>

          {/* Project 3: Miscellaneous */}
          <div className="mb-8 border-b border-slate-200/50 pb-8 last:border-b-0">
            <div className="flex flex-row items-center gap-4 mb-4">
              <h3 className="text-xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-red-600 to-cyan-600 bg-clip-text text-transparent">
                Miscellaneous Projects
              </h3>
              <button 
                onClick={() => setIsMiscProjectExpanded(!isMiscProjectExpanded)}
                className="flex-shrink-0 p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label={isMiscProjectExpanded ? "Hide project details" : "Show project details"}
              >
                <ChevronDown 
                  className={`w-5 h-5 transform transition-transform duration-300 ${isMiscProjectExpanded ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>
            {isMiscProjectExpanded && (
              <div className="pl-6 border-l-4 border-emerald-400 bg-gradient-to-r from-emerald-50/50 to-emerald-100/30 p-6 rounded-r-2xl space-y-6 backdrop-blur-sm">
                <div className="pb-4 border-b border-slate-200/50 last:border-b-0">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">YouTube Video Downloader</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Built a YouTube video downloader application that allows users to download videos in various formats and qualities. Features include batch downloads, format selection, and progress tracking.
                  </p>
                </div>
                
                <div className="pb-4 border-b border-slate-200/50 last:border-b-0">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Learning Management System (LMS)</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Developed a comprehensive LMS using <strong className="text-slate-900">React</strong> for educational institutions. Includes course management, student enrollment, assignment submission, grading, and progress tracking with interactive dashboards.
                  </p>
                </div>
                
                <div className="pb-4 border-b border-slate-200/50 last:border-b-0">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Full-Stack Reddit Clone</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Created a complete Reddit clone with user authentication, subreddit creation, post submission, commenting system, voting mechanisms, and real-time updates with responsive design.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section>
          <Form></Form>
        </section>
      </main>
    </>
  );
}