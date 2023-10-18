import Link from "next/link";
import mainLayoutClasses from "../../app/layout.module.css";

const NavBar = () => {
  return (
    <nav className="flex gap-x-4">
      <Link href="/" className={`text-link ${mainLayoutClasses.navItem}`}>
        Home
      </Link>
      <Link href="/blogs" className={`text-link ${mainLayoutClasses.navItem}`}>
        Blogs
      </Link>
      <Link href="/categories" className={`text-link ${mainLayoutClasses.navItem}`}>
        Categories
      </Link>
      <Link href="/lazy-loading" className={`text-link ${mainLayoutClasses.navItem}`}>
        Lazy Loading
      </Link>
    </nav>
  );
};

export default NavBar;
