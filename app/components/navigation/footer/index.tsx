import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
    <>
      <footer className="w-full h-auto py-12 px-6 md:px-12 lg:px-48 bg-white bottom-0 font-[family-name:var(--font-ubuntu)]">
            <div className="hidden sm:flex justify-evenly pb-8 space-y-8 md:space-y-0">
                <ul className="pt-2">
                    <li className="py-4">
                        <Link href="/" className="">
                            <Image
                                src="/images/UTMBIO.jpg"
                                alt="Logo"
                                width="200"
                                height="74"
                                className="object-fill"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-2xl font-medium text-normal text-emerald-900">THE CURRIE LAB</Link>
                    </li>
                </ul>
                
                <div className="text-sky-900 h-full hidden md:flex">
                    <ul className="text-sky-900 text-sm font-light leading-loose">
                        <li>
                            <Link href="/" className="text-lg font-medium">Navigation</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-emerald-500">About</Link>
                        </li>
                        <li>
                            <Link href="/people" className="hover:text-emerald-500">People</Link>
                        </li>
                        <li>
                            <Link href="/publications" className="hover:text-emerald-500">Publications</Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:text-emerald-500">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-emerald-500">Get in touch</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="text-sky-900 h-full hidden sm:flex">
                    <ul className="text-sky-900 text-sm font-light leading-loose">
                        <li><Link href="/" className="text-lg font-medium">Contact</Link>
                        </li>
                        <li> Email: mark.currie@utoronto.ca
                        </li>
                        <li> Phone: 905-828-3997
                        </li>
                        <li className="">Lab: DV3015
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="w-full flex items-center text-sm font-light justify-center text-slate-500 pt-2 border-t border-slate-300 ">
                <span>Copyright © Currie Lab 2024</span>
            </div>
        </footer>
    </>
  );

};

export default Footer;