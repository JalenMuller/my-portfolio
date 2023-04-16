import { useState, useEffect } from "react";
import { List, X } from "react-bootstrap-icons";
import { pages } from "../data/pages";
import { Link } from "react-router-dom";

function SideBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleDarkMode = () => {
    localStorage.setItem("dark-mode", `${!darkMode}`);
    setDarkMode(!darkMode);
    window.dispatchEvent(new Event("dark-mode"));
  };
  useEffect(() => {
    if (localStorage.getItem("dark-mode") === "true") {
      setDarkMode(true);
      window.dispatchEvent(new Event("dark-mode"));
    }
  }, [darkMode]);
  const pageArray = Object.values(pages);
  return (
    <>
      <div className="text-center">
        <button
          onClick={toggleSidebar}
          className="text-white bg-purple-700 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg md:text-xl px-4 py-2 dark:bg-gray-900 dark:border dark:border-zinc-600 dark:hover:bg-purple-800 focus:outline-none dark:focus:ring-purple-400"
          type="button"
        >
          <List />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          !showSidebar && "-translate-x-full"
        } bg-white dark:bg-gray-800`}
        tabIndex={-1}
      >
        <h5 className="text-lg font-semibold text-gray-500 uppercase dark:text-gray-400">
          Menu
        </h5>
        <button
          type="button"
          className="text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <X className="text-3xl md:text-2xl" />
        </button>
        <div className="py-4 overflow-y-auto">
          <h5 className="text-lg leading-9 text-gray-500 dark:text-gray-200 font-semibold border-gray-300 border-b-2">
            <p className="ml-1">Navigation</p>
          </h5>
          <ul className="space-y-2 font-medium mb-3">
            {pageArray.map((page, i) => (
              <Link to={page.url} onClick={toggleSidebar}>
                <li
                  className={`flex text-base items-center py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-300 ${
                    i !== pageArray.length - 1 && "border-b-2"
                  }`}
                >
                  <span className="ml-2">{page.name}</span>
                </li>
              </Link>
            ))}
          </ul>
          <h5 className="text-lg leading-9 text-gray-500 dark:text-gray-200 font-semibold border-gray-300 border-b-2">
            <p className="ml-1">Settings</p>
          </h5>
          <ul className="space-y-2 font-medium mb-3">
            <li className="flex text-base items-centers justify-between py-2 px-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2 border-gray-200">
              <h5 className="ml-1">Dark mode</h5>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onClick={toggleDarkMode}
                  value=""
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
