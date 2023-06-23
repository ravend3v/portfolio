import Image from "next/image";
import Link from "next/link";
import Img1 from "../public/hero.jpg";

export default function Home() {
  return (
      <main className="flex"> 
        <div className="md:container grid grid-cols-2 gap-5 py-10 md:mx-auto">
            <div className=" container text-left font-serif p-10">
                <h1 className=" font-bold ">
                    Who am I?
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a 
                  page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                  normal distribution of letters, as opposed to using Content here, content here, 
                  making it look like readable English. Many desktop publishing packages 
                  and web page editors now use Lorem Ipsum as their default model text, 
                  and a search for lorem ipsum will uncover many web sites still in their infancy.
                </p>
            </div>
            <div className="flex container p-2 items-center justify-center">
                <Image
                    src={Img1}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex container p-10">
                <Image
                    src={Img1}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>

        </div>
      </main>
  );
}