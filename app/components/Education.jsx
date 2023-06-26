'use client'
import Link from "next/link"

export default function Education () {
    return <div id="education">
        <h1 className="text-xl tracking-widest uppercase text-center">
            Education
        </h1>
        <div className="grid justify-center items-center m-auto">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="" src="https://pbs.twimg.com/profile_images/989034832935243782/zqwJlfVl_400x400.jpg" alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        <Link target="__blank" href="https://www.bc.fi/">
                            Business College Helsinki
                        </Link>
                    </div>
                    <p className="text-black text-base">
                        Autumn 2021 - Spring 2024
                    </p>
                    <p className="text-black text-base">
                        Full-stack development
                    </p>
                </div>
            </div>
        </div>
    </div>
}