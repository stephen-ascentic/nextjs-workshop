import Link from 'next/link';
import homePageClasses from './page.module.css';

export default function Home() {
  //   const date = await getTime();

  return (
    <main className={homePageClasses.introSection}>
      <div className="text-center">
        <h1>
          Welcome to NextJS Series Non Prod<span className="text-2xl">pt.3</span>
        </h1>
        <h2 className="text-2xl">Exploring Data Fetching</h2>
      </div>
      {/* <div className="flex items-center justify-center gap-4">
        <p>{date}</p>
        <IonicIcon name="refresh-circle-outline"></IonicIcon>
      </div> */}
      <Link href={`/blogs?id=${new Date().getTime()}`} className={homePageClasses.checkoutBlogsLink}>
        <p>Check out our blogs</p>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </Link>
    </main>
  );
}
