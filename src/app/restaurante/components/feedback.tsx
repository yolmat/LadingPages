import Image from "next/image";
import avatar from "../../../../public/avatar.png";
import { Star } from "lucide-react";

type FeedbackProps = {
  stars: number;
};

export default function Feedback({ stars }: FeedbackProps) {
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
    <div className="flex bg-white shadow-2xl p-2 rounded-2xl items-center">
      <div className="p-3">
        <Image
          className="h-auto w-20 md:h-full md:w-full"
          src={avatar}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex justify-between">
          <p className="font-bold">Fulana de Tal</p>
          <span className="flex">{startsRender}</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          autem sit vitae facilis maxime doloribus, minima, saepe minus
          distinctio reiciendis voluptatibus!
        </p>
      </div>
    </div>
  );
}
