import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
    return (
        <div className="text-sky-900 px-24 py-12">
            <span className="text-lg font-medium">Contact</span>
            <ul className="text-sky-900 text-sm font-light leading-loose">
                <li> Email: mark.currie@utoronto.ca
                </li>
                <li> Phone: 905-828-3997
                </li>
                <li className="">Lab: DV3015
                </li>
            </ul>
        </div>
    );
}