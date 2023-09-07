import Link from "next/link";
import homePageClasses from "./page.module.css";

export default function Home() {
  return (
    <main className={homePageClasses.introSection}>
      <div className="text-center">
        <h1>
          Welcome to NextJS Series <span className="text-2xl">pt.2</span>
        </h1>
        <h2 className="text-2xl">Routing and Layouts</h2>
      </div>
      <Link href="/blogs" className={homePageClasses.checkoutBlogsLink}>
        <p>Check out our blogs</p>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </Link>
    </main>
  );
}
