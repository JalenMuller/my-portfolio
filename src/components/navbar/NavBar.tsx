import { pages } from "../../data/pages";
import { Link, useLocation } from "react-router-dom";
import LangString from "../LangString";
import LanguagePicker from "./LanguagePicker";
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
        } text-sm rounded p-1 font-semibold hover:text-purple-500 transition`}
        key={page.name}
      >
        <LangString stringName={page.name.toLowerCase()} />
      </Link>
    );
  });
  return (
    <>
      <div className="mx-auto w-full mt-4 md:max-w-7xl md:px-8 lg:px-10 bg-zinc-800">
        <div className="flex h-10 items-center justify-around md:justify-center">
          <Link
            to={pages.aboutMe.url}
            className="hidden md:block mr-auto text-white"
          >
            <span className="font-light">Jalen </span>
            <span className="font-black text-purple-500">Muller</span>
          </Link>
          {/* <img
            src="images/bio_picture.jpg"
            className="h-12 w-12 mr-3 rounded-full border-2 border-white bg-slate-200"
            alt=""
          /> */}
          <div className="flex h-full items-center md:mr-auto">
            <div className="flex h-full  items-center space-x-4 bg-zinc-900 rounded-full px-4 border border-zinc-600">
              {navLinks}
            </div>
          </div>
          <LanguagePicker />
        </div>
      </div>
    </>
  );
}

export default NavBar;
