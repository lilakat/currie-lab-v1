"use client";
import { useRef } from "react";
import Image from "next/image";


export default function Home() {
    const secondImageRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottomOfSecondImage = () => {
        if (secondImageRef.current) {
            const rect = secondImageRef.current.getBoundingClientRect();
            const scrollOffset = window.scrollY + rect.bottom - window.innerHeight;
            window.scrollTo({ top: scrollOffset, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="text-black font-[family-name:var(--font-raleway)]">
                <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
                    <Image
                        src="/images/scene1.png"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <div className="absolute flex flex-col md:flex-row items-center items-centerspace-x-4">
                        <div className="relative md:border-r md:pr-10">
                            <Image
                                src="/images/UofT-Logo-White.png"
                                alt="UofT Logo"
                                width="120"
                                height="120"
                                objectFit="contain"
                            />
                        </div>

                        <div className="pl-2 md:pl-10 tracking-normal sm:tracking-wider">
                            <h1 className="text-white text-center leading-tight text-4xl md:text-7xl font-bold uppercase">
                                The Currie Lab
                            </h1>
                            <p className="text-white text-center leading-tight text-[1.256em] md:text-[2.45rem] uppercase">
                                Cell and Systems Biology
                            </p>
                            <p className="text-white text-center leading-tight text-[0.91rem] md:text-[1.75rem] pb-2 uppercase">
                                University of Toronto Mississauga
                            </p>
                            <div className="pl-2 text-center md:text-left">
                                <button onClick={scrollToBottomOfSecondImage}
                                    className="inline-block px-6 py-3 mt-4 text-white border-2 border-white border-solid rounded-lg transition hover:bg-white hover:bg-opacity-50 uppercase" >
                                    about
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

                <div id="content" className="flex items-center justify-center h-[60vh]">
                    <div className="flex flex-col justify-center text-left px-4 md:w-[50vw]" >
                        <div className="py-4">
                            <div className=" border-l-8 border-emerald-700 border-solid pl-4">
                                <h1 className="text-xl sm:text-4xl font-bold"> Welcome to the Currie Lab! </h1>
                            </div>
                            <p className="sm:text-lg pt-4 pb-10">
                                We seek to understand the mechanisms that govern genome organization, epigenetic gene regulation, and genome stability in health and disease. We combine structural biology, biochemistry, and cellular model systems.
                            </p>

                            <div className=" border-l-8 border-emerald-700 border-solid pl-4">
                                <h1 className="text-xl sm:text-2xl font-bold"> Research Areas</h1>
                            </div>
                            <p className="sm:text-lg py-2">Cell Biology, Developmental Biology, Genetics / Genomics, Molecular Biology, Pathology, Proteomics, Structural Biology </p>
                        </div>

                    </div>

                </div>

                <div ref={secondImageRef} className="relative w-full h-[20vh] flex justify-center overflow-hidden">
                    <Image
                        src="/images/scene2_background_bar.png"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="right"
                        className="w-full brightness-75"
                    />
                </div>
            </div>
        </>
    );
}
