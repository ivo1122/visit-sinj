import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-scroll";

const FirstItem = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


  return (
    
    <Menu as="div" className="relative inline-block text-left">

      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-m font-medium shadow-sm ">
          Doživite
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-4 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <Link to="calendar" smooth={true} duration={500}>
                    <p>Ljeto 2023.</p>
                  </Link>{" "}
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <Link to="outdoor" smooth={true} duration={500}>
                    <p>Outdoor</p>
                  </Link>{" "}
                </div>
              )}
            </Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FirstItem;
