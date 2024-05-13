import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import { classNames } from "./helpers/classNames";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const raceSport = localFont({
  src: [
    { path: "../../public/fonts/race_sport/font.woff" },
    { path: "../../public/fonts/race_sport/font.woff2" },
  ],
  display: "swap",
  variable: "--font-race-sport",
});

export const fontClasses = classNames(rubik.variable, raceSport.variable);
