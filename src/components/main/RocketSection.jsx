import img1 from "../../../public/rocketman.png"
import img2 from "../../../public/rocketride.png"
import img3 from "../../../public/rocketlaunch.png"
const RocketSection = () => {
  return (
    <>
           <section id="rockets" className="p-6 my-12 scroll-mt-20">
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>
          <ul className="list-none gap-2 mx-auto my-12 flex items-center  justify-center flex-col sm:flex-row">
            <li className=" w-2/3 mb-4  sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <img
                src={img1}
                alt="explorer"
                className="w-1/2"
              />
              <h3 className="text-3xl mt-2 text-center text-slate-900 dark:text-white">
                Explorer
              </h3>
              <p className="hidden mt-2 sm:block text-3xl text-center text-slate-500 dark:text-slate-400">
                $
              </p>
              <p className="sm:hidden capitalize mt-2 text-2xl text-center text-slate-900 dark:text-white">
                affordable exploration
              </p>
            </li>
            <li className=" w-2/3 mb-4 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <img
                src={img2}
                alt="adventure"
                className="w-1/2"
              />
              <h3 className="text-3xl mt-2 text-center text-slate-900 dark:text-white">
                Adventures
              </h3>
              <p className="hidden mt-2 sm:block text-3xl text-center text-slate-500 dark:text-slate-400">
                $$
              </p>
              <p className="sm:hidden capitalize mt-2 text-2xl text-center text-slate-900 dark:text-white">
                best selling rockets !
              </p>
            </li>
            <li className=" w-2/3 mb-4 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <img
                src={img3}
                alt="infinity"
                className="w-1/2"
              />
              <h3 className="text-3xl mt-2 text-center text-slate-900 dark:text-white">
                Infinity
              </h3>
              <p className="hidden mt-2 sm:block text-3xl text-center text-slate-500 dark:text-slate-400">
                $$$
              </p>
              <p className="sm:hidden capitalize mt-2 text-2xl text-center text-slate-900 dark:text-white">
                luxury startship
              </p>
            </li>
          </ul>
        </section>
    </>
  )
}

export default RocketSection
