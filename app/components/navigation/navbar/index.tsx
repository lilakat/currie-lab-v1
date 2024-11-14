import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    const pathname = usePathname()

    return (<>
        <div className="w-full h-14 md:h-24 px-4 sm:px-16 bg-white sticky top-0 flex justify-between items-center font-[family-name:var(--font-ubuntu)] z-50">

            <ul className="flex items-center">
                <li>
                    <Link href="/" className="hidden md:flex pr-3 pb-2">
                        <Image
                            src="/images/UTMlogo.svg"
                            alt="Logo"
                            width="130"
                            height="74"
                            className="relative"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/" className="text-xl sm:text-3xl md:border-l border-gray-400 pl-3 text-normal text-emerald-900">CURRIE LAB</Link>
                </li>
            </ul>

            <button
                type="button"
                className="inline-flex items-center md:hidden"
                onClick={toggle}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#233876"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                    />
                </svg>
            </button>

            <ul className="hidden md:flex gap-x-8 text-sky-900 text-lg font-light">
                <li>
                    <Link href="/" className={`link ${pathname === '/' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-600`}>About</Link>
                </li>
                <li>
                    <Link href="/people" className={`link ${pathname === '/people' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-600`}>People</Link>
                </li>
                <li>
                    <Link href="/publications" className={`link ${pathname === '/publications' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-600`}>Publications</Link>
                </li>
                <li>
                    <Link href="/gallery" className={`link ${pathname === '/gallery' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-600`}>Gallery</Link>
                </li>
                <li>
                    <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''} [&.active]:underline underline-offset-4 hover:text-emerald-600`}>Get in touch</Link>
                </li>
            </ul>
        </div>
    </>
    );
};

export default Navbar;