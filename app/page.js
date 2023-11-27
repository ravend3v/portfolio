/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
      <main id="about"> 
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                About me
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

      </main>
  );
}