import { pages } from "../../data/pages";
import { Link, useLocation } from "react-router-dom";
import LangString from "../LangString";
import SideBar from "../SideBar";
function NavBar() {
  let location = useLocation();
  let navLinks: any[] = [];
  Object.values(pages).forEach((page) => {
    let active = page.url === location.pathname;
    navLinks.push(
      <Link
        id={page.name}
        to={page.url}
        className={`${
          active
            ? "text-gray-800 dark:text-gray-900"
            : "text-white dark:text-white"
        } text-sm rounded p-1 md:p-2 font-semibold hover:text-purple-900 dark:hover:text-gray-800 transition`}
        key={page.name}
      >
        <LangString stringName={page.name.toLowerCase()} />
      </Link>
    );
  });
  return (
    <>
      <div className="mx-auto w-full pt-4  md:px-8 bg-gray-100 dark:bg-zinc-800">
        <div className="flex h-10 px-5 items-center justify-between">
          <Link
            to={pages.aboutMe.url}
            className="text-black dark:text-white text-xl"
          >
            <span className="font-semibold text-gray-600 dark:text-gray-300">
              Jalen{" "}
            </span>
            <span className="font-black text-purple-500">Muller</span>
          </Link>
          <div className="hidden md:block flex h-full items-center md:mx-auto">
            <div className="flex h-full bg-purple-500 dark:bg-purple-600 items-center space-x-4 dark:border-zinc-600 rounded-full px-4 border border-zinc-400">
              {navLinks}
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default NavBar;
