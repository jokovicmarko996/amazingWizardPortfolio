import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesbackground from "./components/FireFliesbackground";
import Sound from "./components/Sound";

const inter = Inter({
  subsets: ["latin"],
  /* defined in tailwindconfig  */
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesbackground />
        <Sound />

        <div id="my-modal" />
      </body>
    </html>
  );
}
