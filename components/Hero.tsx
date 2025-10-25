
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://picsum.photos/1920/1080"
        >
          {/* Using a high-quality, abstract video from Pexels */}
          <source 
            src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 px-4 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-tight">
          Blue is a creative studio
        </h1>
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-gray-300">
          focused on elevating brands through crafted digital experiences.
        </p>
        <a href="/contact" className="mt-8 md:mt-10 px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
          Start a Project
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2">
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-white animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
