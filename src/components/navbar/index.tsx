"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { config } from "@/configs/header";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const ListItem = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) => (
  <li
    className={`p-2 text-sm font-semibold  ${montserrat.className} ${
      active ? "text-gray-700" : "text-white"
    } transition`}
  >
    {children}
  </li>
);

const CategoriesList = () => {
  return (
    <ul
      className={`flex w-[1400px] flex-row justify-between px-8 ${montserrat.className} `}
    >
      {config.menu.map(({ text }) => (
        <li
          className="border- cursor-pointer border-y-4 border-transparent py-2 text-gray-400 transition-all ease-linear hover:border-b-green-400"
          key={text}
        >
          {text}
        </li>
      ))}
    </ul>
  );
};

const Menu = ({ isSeller }: { isSeller: boolean }) => (
  <div
    className={`absolute left-[-50px] top-[30px] flex w-[150px] flex-col  overflow-hidden  rounded-md border border-gray-300 bg-white p-2 text-gray-800 shadow-2xl transition-colors`}
  >
    {isSeller && (
      <>
        <span className="cursor-pointer border border-none px-2 py-1 text-gray-500 transition hover:text-green-700">
          Gigs
        </span>
        <span className="cursor-pointer border border-none px-2 py-1 text-gray-500 transition hover:text-green-700">
          Add New Gig
        </span>
      </>
    )}
    <span className="cursor-pointer border border-none px-2 py-1 text-gray-500 transition hover:text-green-700">
      Orders
    </span>
    <span className="cursor-pointer border border-none px-2 py-1 text-gray-500 transition hover:text-green-700">
      Messages
    </span>
    <hr />
    <span className="cursor-pointer border border-none px-2 py-1 text-gray-500 transition hover:text-green-700">
      Logout
    </span>
  </div>
);

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isScroll = () => {
    if (window?.scrollY > 0) {
      setActive(true);
      return;
    }
    setActive(false);
  };

  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", isScroll);
    return () => {
      window.removeEventListener("scroll", isScroll);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John doe",
    isSeller: true,
  };

  return (
    <div
      className={`ustify-center fixed top-0 z-10 flex w-full flex-col items-center transition-all  duration-500 ease-in-out ${
        active ? "bg-white" : " bg-transparent"
      }`}
    >
      <div className="flex w-[1400px] items-center justify-between px-8 py-3">
        <Link
          href={config.logo.path}
          className={`logo text-4xl font-extrabold tracking-tighter ${
            active ? "text-gray-800" : "text-white"
          }`}
        >
          <span>fiverr</span>
          <span className="text-green-500">.</span>
        </Link>
        <ul className={`flex list-none items-center gap-5`}>
          {config.links.map(({ path, text, type, validateUser }) => {
            if (validateUser && !validateUser(currentUser)) {
              return <></>;
            }

            return (
              <ListItem key={text} active={active}>
                <Link href={path}>
                  {type === "Link" ? (
                    text
                  ) : (
                    <button
                      className={`rounded-md border px-4 py-2 transition hover:bg-green-600 hover:text-white ${
                        active
                          ? "border-green-600 text-green-600"
                          : "text-white"
                      }`}
                    >
                      {text}
                    </button>
                  )}
                </Link>
              </ListItem>
            );
          })}
          {currentUser && (
            <div className="relative flex gap-1 transition">
              <Image
                width={30}
                height={30}
                alt="profile"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                className="cursor-pointer"
                onClick={() => setIsMenuOpen((open) => !open)}
              />
              <span
                className={`${
                  active ? "text-gray-800" : "text-white"
                } cursor-pointer select-none`}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                {currentUser?.username}
              </span>
              {isMenuOpen && <Menu isSeller={currentUser?.isSeller} />}
            </div>
          )}
        </ul>
      </div>
      {active && (
        <>
          <hr className="w-full border-[0.5px] border-gray-300" />
          <CategoriesList />
        </>
      )}
    </div>
  );
};
