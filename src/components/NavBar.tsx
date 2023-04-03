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
          active ? "text-white text-lg font-semibold" : "text-gray-300"
        } text-base rounded p-1 hover:text-white transition`}
        key={page.name}
      >
        {page.name}
      </Link>
    );
  });
  return (
    <>
      <Disclosure as="nav" className="absolute w-screen">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-white text-xl">JM</div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navLinks}
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <Disclosure.Button
                  as="a"
                  href={"item.href"}
                  className={"text-gray-300 hover:bg-gray-700 hover:text-white"}
                >
                  item.name
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default NavBar;
