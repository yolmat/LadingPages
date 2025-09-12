"use client";
import { Hamburger, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full p-20 pt-5">
      <nav>
        <div className=" hidden w-full sm:flex items-center justify-between">
          <p className="text-amber-600 flex font-bold items-center">
            <Hamburger /> <span className="text-2xl">FOOD</span>
          </p>

          {/* Desktop */}
          <ul className=" text-gray-500 font-semibold sm:flex sm:gap-4 items-center">
            <li className="cursor-pointer">
              <a>Inicio</a>
            </li>
            <li className="cursor-pointer">
              <a>Cardápio</a>
            </li>
            <li className="cursor-pointer">
              <a>Avaliações</a>
            </li>
            <li>
              <button className="cursor-pointer text-gray-100 bg-amber-500 rounded-md p-1 shadow-[0px_0px_20px_1px] shadow-amber-600 hover:opacity-90 active:opacity-80">
                Peça Aqui
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-1.5 flex sm:hidden flex-col items-center">
          <i className="text-amber-600 flex font-bold">
            <Hamburger /> FOOD
          </i>

          {/* Button mobile*/}
          <button
            className="block sm:hidden m-5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          {/* Mobile */}
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } sm:hidden w-screen flex-col items-center `}
          >
            <li className="cursor-pointer p-1">
              <a>Inicio</a>
            </li>
            <li className="cursor-pointer p-1">
              <a>Cardápio</a>
            </li>
            <li className="cursor-pointer p-1">
              <a>Avaliações</a>
            </li>
            <li className="cursor-pointer p-1 mt-3">
              <button className="cursor-pointer text-gray-100 bg-amber-500 rounded-md p-1 shadow-[0px_0px_20px_1px] shadow-amber-600 hover:opacity-90 active:opacity-80">
                Peça Aqui
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
