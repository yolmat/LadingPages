import { Heart, Star, ShoppingCart } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type PlatesProps = {
  imageSrc: string | StaticImageData;
  stars: number;
  price: string;
};

export default function Plates({ imageSrc, stars, price }: PlatesProps) {
  const startsRender = Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.round(stars);
    return (
      <Star
        key={i}
        className={filled ? "text-amber-300" : "opacity-25"}
        fill="currentColor"
      />
    );
  });

  return (
    <div className="bg-white shadow-2xl rounded-2xl flex-wrap w-full md:w-md">
      <div className="absolute bg-amber-400 flex items-center justify-center rounded-4xl p-1">
        <Heart className="text-white opacity-90 w-5 h-5" fill="currentColor" />
      </div>
      <div className="flex flex-col items-center justify-center p-2 lg:p-5 gap-5">
        <Image src={imageSrc} alt="dish" />
        <h3 className="text-2xl font-bold">Lorem ipsum</h3>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

        <div className="flex">
          {startsRender}
          <span>(500+)</span>
        </div>

        <div className="flex items-center gap-5">
          <h4 className="text-sm font-extrabold">{price}</h4>
          <button className="bg-amber-400 p-2 rounded-2xl cursor-pointer hover:opacity-80 ">
            <ShoppingCart className="text-black" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
}
