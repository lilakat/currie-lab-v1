import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="text-black font-[family-name:var(--font-raleway)]">
                <div className="relative w-full h-[40vh] flex justify-center overflow-hidden">
                    <Image
                        src="/images/scene1Top.png"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="w-full brightness-75"
                    />
                </div>

                <div className="flex flex-col justify-center items-center h-[40vh] sm:h-[20vh] text-center px-24">
                    <h1 className="text-2xl sm:text-4xl pb-6">Welcome to the Currie Lab!</h1>
                    <p className="sm:text-xl px-44">
                        We seek to understand the mechanisms that govern genome organization, epigenetic gene regulation, and genome stability in health and disease. We combine structural biology, biochemistry, and cellular model systems.
                    </p>
                </div>

                <div className="relative w-full h-[40vh] flex justify-center overflow-hidden">
                    <Image
                        src="/images/scene1Bottom.png"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="w-full brightness-75"
                    />
                </div>
            </div>
        </>
    );
}
