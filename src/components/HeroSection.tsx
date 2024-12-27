import { useEffect, useRef } from "react";

export const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-neutral-light">
      <div
        ref={parallaxRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center px-6 animate-fade-up">
          <span className="inline-block px-3 py-1 mb-4 text-sm bg-sage/10 text-sage rounded-full">
            Introducing Innovation
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-dark mb-6">
            Design Meets
            <br />
            Perfection
          </h1>
          <p className="text-lg md:text-xl text-neutral-dark/70 max-w-2xl mx-auto mb-8">
            Experience the future of design with our revolutionary approach to
            digital aesthetics and functionality.
          </p>
          <button className="px-8 py-4 bg-neutral-dark text-white rounded-full hover:bg-graphite transition-colors duration-300">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};