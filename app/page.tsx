import Link from "next/link";
import homePageClasses from "./page.module.css";
import { getTime } from "@/api";

export default async function Home() {

  const date = await getTime();

  return (
    <main className={homePageClasses.introSection}>
      <div className="text-center">
        <h1>
          Welcome to NextJS Series <span className="text-2xl">pt.3</span>
        </h1>
        <h2 className="text-2xl">Exploring Data Fetching</h2>
      </div>
      <p>{date}</p>
      <Link href="/blogs" className={homePageClasses.checkoutBlogsLink}>
        <p>Check out our blogs</p>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </Link>
    </main>
  );
}
