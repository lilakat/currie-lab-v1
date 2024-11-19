import type { Metadata } from "next";
import localFont from "next/font/local";
import { Ubuntu, Lato, Roboto, Merriweather, Open_Sans, Montserrat, Nunito, Playfair_Display, Source_Serif_4, Source_Sans_3, Poppins, Raleway, Josefin_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/navigation/footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "700"], // Regular for headers, Bold for emphasis
  variable: "--font-josefinSans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["200", "300", "400", "700"], // Regular for headers, Bold for emphasis
  variable: "--font-dmSans",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: ["300", "400", "500"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
})


const lato = Lato({
  weight: ["400", "700"], // Normal and Bold for headers
  variable: "--font-lato",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["300", "400", "500"], // Light, Normal, and Medium for body text and titles
  variable: "--font-roboto",
  subsets: ["latin"],
});


const merriweather = Merriweather({
  weight: ["300", "400", "700"], // Regular for headers, Bold for emphasis
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["300", "400", "600"], // Light, Regular, and Semi-Bold for body text and titles
  variable: "--font-open-sans",
  subsets: ["latin"],
});


const montserrat = Montserrat({
  weight: ["400", "700"], // Regular for headers, Bold for main header
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["300", "400", "600"], // Light, Regular, and Semi-Bold for body text and titles
  variable: "--font-nunito",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"], // Regular and Bold for headers
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const sourceSerifPro = Source_Serif_4({
  weight: ["400", "600"], // Regular and Semi-Bold for titles
  variable: "--font-source-serif-pro",
  subsets: ["latin"],
});

const sourceSansPro = Source_Sans_3({
  weight: ["300", "400", "600"], // Light, Regular, and Semi-Bold for body text
  variable: "--font-source-sans-pro",
  subsets: ["latin"],
});


const poppins = Poppins({
  weight: ["400", "700"], // Regular for headers, Bold for main header
  variable: "--font-poppins",
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["300", "400", "500"], // Light, Regular, and Medium for body text
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Currie Lab",
  description: "Currie Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} ${lato.variable} ${roboto.variable} ${merriweather.variable} ${openSans.variable} ${montserrat.variable} ${nunito.variable} ${playfairDisplay.variable} ${sourceSansPro.variable} ${sourceSerifPro.variable} ${poppins.variable} ${raleway.variable} ${josefinSans.variable} ${dmSans.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <div className="flex-grow flex-row max-w-full overflow-auto">
                {children}
            </div>
            <Footer />
        </div>
      </body>
    </html>
  );
}
