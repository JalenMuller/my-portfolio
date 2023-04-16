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
          active ? "text-purple-500 " : "text-gray-300"
        } text-sm rounded p-1 md:p-2 font-semibold hover:text-purple-500 transition`}
        key={page.name}
      >
        <LangString stringName={page.name.toLowerCase()} />
      </Link>
    );
  });
  return (
    <>
      <div className="absolute mx-auto w-full mt-4 md:max-w-7xl md:px-8 lg:px-10 bg-zinc-800">
        <div className="flex h-10 px-5 items-center justify-between">
          <Link to={pages.aboutMe.url} className="text-white text-xl">
            <span className="font-light">Jalen </span>
            <span className="font-black text-purple-500">Muller</span>
          </Link>
          <div className="hidden md:block flex h-full items-center md:mx-auto">
            <div className="flex h-full  items-center space-x-4 dark:bg-gray-900 rounded-full px-4 border border-zinc-600">
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
