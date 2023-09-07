import dayjs from "dayjs";
import dayJsRelativeTimePlugin from "dayjs/plugin/relativeTime";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import mainLayoutClasses from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });
dayjs.extend(dayJsRelativeTimePlugin);

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={mainLayoutClasses.layoutHeader}>
          <Link href="/">
            <h1>BlogLife</h1>
          </Link>
          <nav className="flex gap-x-4">
            <Link href="/" className={`text-link ${mainLayoutClasses.navItem}`}>
              Home
            </Link>
            <Link href="/blogs" className={`text-link ${mainLayoutClasses.navItem}`}>
              Blogs
            </Link>
          </nav>
        </header>
        <div className="max-w-[75dvw] mx-auto mt-4">{children}</div>
        {/* https://ionic.io/ionicons/usage */}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </html>
  );
}
