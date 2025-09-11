"use client";
import { Hamburger, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <i>
          {" "}
          <Hamburger /> Food
        </i>

        {/* Desktop */}
        <ul className="hidden sm:block bg-amber-400">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Cardápio</a>
          </li>
          <li>
            <a>Avaliações</a>
          </li>
        </ul>
        <button className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
        {/* Mobile */}
        <ul className={`${isOpen ? "block" : "hidden"} sm:hidden bg-amber-700`}>
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Cardápio</a>
          </li>
          <li>
            <a>Avaliações</a>
          </li>
        </ul>

        {/* Button mobile*/}
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}></div>
      </nav>
    </header>
  );
}
