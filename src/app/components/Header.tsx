"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "services",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`bg-white shadow-md fixed top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "md:w-[25rem] w-[20rem] px-6 py-3 rounded-b-3xl shadow-xl bg-opacity-25 text-neutral-300 hover:bg-neutral-50 hover:text-neutral-700 transition-all duration-300"
            : "w-screen p-6"
        }`}
      >
        <ul className="flex flex-row justify-center items-center gap-6 text-xl font-extrabold">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="hover:underline cursor-pointer hover:text-neutral-600 hover:scale-125 transition-all duration-500 capitalize text-base md:text-xl"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
