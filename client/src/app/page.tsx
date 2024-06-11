import Image from "next/image";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="h-full">
      <section className="Intro h-[93vh] flex items-center justify-center flex-col bg-cover bg-center" style={{backgroundImage:"url('/ambulance.jpg')"}}>
        <div className="grid grid-cols-1 grid-rows-1 items-center">
          <h1 className="text-center text-7xl font-bold mx-16 bg-gradient-to-r from-cyan-400 via-cyan-700 to-purple-500 bg-clip-text text-transparent blur-sm duration-250 scale-100 col-start-1 col-end-1 row-start-1 row-end-1">
            Welcome to Algiers Healthcare Network Optimisation
          </h1>
          <h1 className="text-center text-7xl font-bold mx-16 bg-gradient-to-r from-cyan-400 via-cyan-700 to-purple-500 bg-clip-text text-transparent duration-250 col-start-1 col-end-1 row-start-1 row-end-1">
            Welcome to Algiers Healthcare Network Optimisation
          </h1>
        </div>
        <a
          href="/app"
          className="px-12 py-4 mt-16 font-bold shadow-inner bg-cyan-500 rounded-large hover:scale-105 hover:shadow-large hover:bg-gradient-to-br from-teal-700 via-cyan-500 to-cyan-700 ease-in-out duration-250"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
