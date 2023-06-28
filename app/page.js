
export default function Home() {
  return (
      <main id="about"> 
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" alt=""/>
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