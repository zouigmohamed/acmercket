import img from "../../../public/rocketdab.png"
const HeroSection = () => {
    return (
      /** sm md lg xl 2xl */
    <>
      <section
        id="hero"
        className="flex flex-col-reverse scroll-mt-20 justify-center sm:flex-row p-6 items-center gap-8 mb-12"
      >
        <article className="sm:w-2/3">
          <h2 className="capitalize  text-4xl  font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl mb-10 xl:text-7xl sm:text-left text-slate-90 dark:text-white">
            we boldy go
            <span className="px-1 text-indigo-700 dark:text-indigo-300">
              where no rocket has gone
            </span>
            before
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center  sm:text-left dark:text-slate-400 text-slate-700">
            we are building the rockets for the next century today. From the
            moon to Mars , Jupiter and beyond...
          </p>
          <p className="max-w-md  text-2xl mt-4 text-center sm:text-left dark:text-slate-400 text-slate-700">
            Think Acme Rocket.
          </p>
        </article>
        <img className="w-1/3" src={img} alt="rocket dab" />
      </section>
    </>
  );
};

export default HeroSection;
