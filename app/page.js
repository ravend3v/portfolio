/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
      <section className="flex items-center bg-[#FSFSFS] xl:h-screen font-poppins">
          <div className="justify-center flex-1 max-2-6xl py-4 mx-auto lg:py-6 md:px-6">
              <div className="flex flex-wrap">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <img src="static/profile.jpg" alt="" className="relative z-40 object-cover w-full h-96 rounded-3xl"></img>
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <h2 className="mb-4 text-4xl px-2 rounded-lg font-semibold text-[#000000]">
                      About Me
                    </h2>
                    
                    <p className="mb-10 text-base leading-7 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
              </div>
          </div>
      </section>
  );
}