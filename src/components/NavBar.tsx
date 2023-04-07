import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { pages } from "../data/pages";
import { Link, useLocation } from "react-router-dom";
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
        {page.name}
      </Link>
    );
  });
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-zinc-800">
        <div className="flex h-16 items-center justify-center">
          <div className="hidden md:block mr-auto text-white">
            <span className="font-light">Jalen </span>
            <span className="text-purple-500 font-black">Muller</span>
          </div>
          <div className="flex items-center md:mr-auto">
            <div className="flex items-baseline space-x-4 bg-zinc-900 rounded-full px-4 py-1 border border-zinc-600">
              {navLinks}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
