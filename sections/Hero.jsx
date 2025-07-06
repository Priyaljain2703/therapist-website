import React from 'react';
import "../src/app/globals.css";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f3f0e8] text-white font-serif flex flex-col items-center justify-start pt-12 px-4">


      <div className="w-full max-w-7xl self-start mb-15 pl-15">
        <h1 className="text-lg md:text-xl text-[#254534] font-medium">
          Dr. Serena Blake, PsyD <br/>Clinical Psychologist
        </h1>
      </div>


      <div className="relative w-[91vw] h-[95vh] rounded overflow-hidden shadow-lg mb-13">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source src="/sea.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className="absolute inset-0 bg-black/20 z-20" />

        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold mb-13">
            Psychological Care for
          </h1>
          <h2 className="text-5xl  font-bold mb-10">
            Change, Insight, and Well-Being
          </h2>
          <p className="text-[22px] mb-8 font-light">
            Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
          </p>
         <button
         type="button"
         className="bg-[#94b0b0] text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide shadow-md hover:bg-[#94b0b0]/80 transition"
         >
           SCHEDULE A CONSULTATION
         </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
