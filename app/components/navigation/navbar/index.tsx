import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    const pathname = usePathname()

    return (<>
        <div className="w-full h-14 px-6 md:px-24 lg:px-40 bg-white sticky top-0 flex justify-between items-center tracking-wide font-[family-name:var(--font-dmSans)] z-50">

            <ul className="flex items-center">
                <li>
                </li>
                <li className="">
                    <Link href="/" className="text-xl sm:text-xl text-zinc-900 font-bold">THE CURRIE LAB</Link>
                </li>
            </ul>

            <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={toggle}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="#000000"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                    />
                </svg>
            </button>

            <ul className="hidden lg:flex text-black text-base font-extralight uppercase">
                <li>
                    <Link href="/" className={`link ${pathname === '/' ? 'active' : ''} [&.active]:font-normal hover:bg-emerald-700 hover:text-white px-4 pb-2 pt-3`}>About</Link>
                </li>
                <li>
                    <Link href="/people" className={`link ${pathname === '/people' ? 'active' : ''} [&.active]:font-normal hover:bg-emerald-700 hover:text-white px-4 pb-2 pt-3`}>People</Link>
                </li>
                <li>
                    <Link href="/publications" className={`link ${pathname === '/publications' ? 'active' : ''} [&.active]:font-normal hover:bg-emerald-700 hover:text-white px-4 pb-2 pt-3`}>Publications</Link>
                </li>
                <li>
                    <Link href="/gallery" className={`link ${pathname === '/gallery' ? 'active' : ''} [&.active]:font-normal hover:bg-emerald-700 hover:text-white px-4 pb-2 pt-3`}>Gallery</Link>
                </li>
                <li>
                    <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''} [&.active]:font-normal hover:bg-emerald-700 hover:text-white px-4 pb-2 pt-3`}>Get in touch</Link>
                </li>
            </ul>
        </div>
    </>);
};

export default Navbar;