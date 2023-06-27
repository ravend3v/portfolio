
export default function Home() {
  return (
      <main id="who_am_i"> 
        <div className="flex items-center justify-center p-5">
            <div className="p-4 max-w-sm rounded overflow-hidden shadow-lg z-[2]">
                <img className="" src="https://images.unsplash.com/photo-1578589335615-9e804277a5af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold font-serif text-xl mb-2">
                        Who am I?
                    </div>
                      <p className="text-black text-base font-serif">
                        It is a long established fact that a reader will be distracted by the readable content of a 
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                        normal distribution of letters, as opposed to using Content here, content here, 
                        making it look like readable English. Many desktop publishing packages 
                        and web page editors now use Lorem Ipsum as their default model text, 
                        and a search for lorem ipsum will uncover many web sites still in their infancy.
                      </p>
                </div>
            </div>
          </div>
      </main>
  );
}