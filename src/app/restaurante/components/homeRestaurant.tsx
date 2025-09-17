import { Facebook, Instagram, Phone, Youtube } from "lucide-react";
import Image from "next/image";
import hero from "../../../../public/hero.png";

export default function HomeRestaurant() {
  return (
    <section className="p-10 pt-1 pb-0 sm:pt-5 flex justify-center max-h-1/2">
      <div className="w-full md:3/5 lg:w-2/5 flex flex-col gap-10 mt-2 relative z-2">
        <h1 className="text-5xl text-gray-700 font-bold">
          O sabor que vai até <span className="text-amber-400">Você</span>
        </h1>

        <p className="text-1xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          perferendis eaque quaerat, nesciunt vel natus earum reiciendis harum
          ipsum laborum quibusdam totam quisquam deserunt placeat voluptatibus
          laboriosam officia. Officia, dignissimos!
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <a href="">
            <button className="cursor-pointer text-sm text-gray-100 bg-amber-500 rounded-md p-2 shadow-[0px_0px_20px_1px] shadow-amber-600 hover:opacity-90 active:opacity-80">
              Ver Cardapio
            </button>
          </a>
          <a href="">
            <button className="bg-white flex items-center cursor-pointer text-gray-800 rounded-md p-2 shadow-[0px_0px_25px_0.5px] shadow-gray-500 hover:opacity-90 active:opacity-80">
              <Phone
                className="mr-1 size-5 bg-amber-500 rounded-sm p-0.5 text-white shadow-[0px_0px_10px_1px] shadow-amber-600"
                fill="currentColor"
              />
              <span className="text-sm"> (11) 98661-9079</span>
            </button>
          </a>
        </div>

        <div className="flex gap-5 items-center justify-center md:justify-start">
          <a href="">
            <button className="cursor-pointer rounded-sm shadow-[0px_0px_10px_1px] shadow-gray-400 p-1 hover:shadow-[0px_0px_10px_2px]">
              <Facebook />
            </button>
          </a>
          <a href="">
            <button className="cursor-pointer rounded-sm shadow-[0px_0px_10px_1px] shadow-gray-400 p-1 hover:shadow-[0px_0px_10px_2px]">
              <Instagram />
            </button>
          </a>
          <a href="">
            <button className="cursor-pointer rounded-sm shadow-[0px_0px_10px_1px] shadow-gray-400 p-1 hover:shadow-[0px_0px_10px_2px]">
              <Youtube />
            </button>
          </a>
        </div>
      </div>
      <div className="bg-amber-500 md:h-4/9 md:w-8/20 lg:h-6/9 lg:w-9/20 absolute rounded-[40%_30%_0%_20%] top-30 right-0 z-1"></div>
      <div className="hidden md:block w-fit z-2">
        <Image src={hero} alt="hero image" />
      </div>
    </section>
  );
}
