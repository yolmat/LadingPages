import Image from "next/image";
import waves from "../../../../public/wave.svg";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-400 w-full h-full scroll">
      <Image src={waves} alt="waves" className="w-full" />
      <div>
        <span className="flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-center md:justify-between p-20 pt-5 pb-10">
          <span className="text-bg">&copy; 2025 Mateus Saraiva</span>
          <div className="flex gap-5 items-center justify-center md:justify-start">
            <Link href="https://github.com/yolmat" target="_blank">
              <button className="bg-bg cursor-pointer rounded-sm shadow-[0px_0px_10px_1px] shadow-gray-400 p-1 hover:shadow-[0px_0px_10px_2px]">
                <Github />
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mateus-saraiva/"
              target="_blank"
            >
              <button className="bg-bg cursor-pointer rounded-sm shadow-[0px_0px_10px_1px] shadow-gray-400 p-1 hover:shadow-[0px_0px_10px_2px]">
                <Linkedin />
              </button>
            </Link>
            <Link
              href="https://www.instagram.com/mateusaraiva03?igsh=enY3Ync5ejJzY2hv"
              target="_blank"
            >
              <button className="bg-bg cursor-pointer rounded-sm shadow-[0px_0px_10px_1px] shadow-gray-400 p-1 hover:shadow-[0px_0px_10px_2px]">
                <Instagram />
              </button>
            </Link>
          </div>
        </span>
      </div>
    </footer>
  );
}
