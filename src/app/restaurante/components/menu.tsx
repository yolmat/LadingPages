import Plates from "./plates";
import dish from "../../../../public/dish.png";
import dish2 from "../../../../public/dish2.png";
import dish3 from "../../../../public/dish3.png";
import dish4 from "../../../../public/dish4.png";

export default function Menu() {
  return (
    <section className="flex flex-col items-center mt-5 gap-5 p-5 lg:p-20 text-center">
      <h2 className="text-amber-500 font-extrabold text-3xl">Cardapio</h2>
      <h3 className="font-extrabold text-4xl">Nossos pratos especiais</h3>
      <article className="flex w-full lg:p-20 gap-10 flex-wrap items-center justify-center">
        <Plates imageSrc={dish} price="R$ 20,00" stars={4} />
        <Plates imageSrc={dish2} price="R$ 50,00" stars={5} />
        <Plates imageSrc={dish3} price="R$ 40,00" stars={3} />
        <Plates imageSrc={dish4} price="R$ 90,00" stars={5} />
      </article>
    </section>
  );
}
