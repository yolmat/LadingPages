import Image from "next/image";
import chef from "../../../../public/chef.png";
import Feedback from "./feedback";

export default function Testemonials() {
  return (
    <section className="flex p-5 lg:p-20">
      <Image src={chef} alt="chef" className="h-auto w-100 hidden lg:block" />
      <div className="flex flex-col gap-5 items-center justify-center">
        <h2 className="text-2xl font-extrabold text-amber-500">Depoimentos</h2>
        <h3 className="text-5xl font-extrabold">
          O que os clientes falam de nós
        </h3>

        <Feedback stars={5} />
        <Feedback stars={4} />

        <button className="cursor-pointer text-gray-100 bg-amber-400 rounded-md p-2 shadow-[0px_0px_20px_1px] shadow-amber-400 hover:opacity-90 active:opacity-80 w-fit mt-5">
          Ver mais avaliações
        </button>
      </div>
    </section>
  );
}
