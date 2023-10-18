import Link from "next/link";
import homePageClasses from "./page.module.css";

import { getTime } from "@/lib/api";

export default async function Home() {
  const time = await getTime();
  return (
    <main className={homePageClasses.introSection}>
      <div className="text-center">
        <h1>Welcome to NextJS Series</h1>
      </div>
      <div>
        {/* <p className="font-bold text-red-500 text-3xl">{category}</p> */}
        <p>{time}</p>
      </div>
      <Link href="/blogs" className={homePageClasses.checkoutBlogsLink}>
        <p>Check out our blogs</p>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </Link>
    </main>
  );
}
