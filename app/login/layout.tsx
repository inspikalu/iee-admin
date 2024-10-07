import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-[#FFFFF0] text-black`}
      >
        <div className="grid w-full h-screen grid-cols-[2fr_1fr]">
          <div className="overflow-hidden">
            <img src={"/illustration.jpg"} className="w-full h-full object-cover" alt="Illustration" />
          </div>
          <div className="w-full h-full bg-[#E8E9ED] overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
