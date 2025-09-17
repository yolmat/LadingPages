import HomeRestaurant from "./components/homeRestaurant";
import Header from "./components/header";
import Menu from "./components/menu";

export default function Restaurante() {
  return (
    <>
      <Header />
      <main>
        <HomeRestaurant />
        <Menu />
      </main>
    </>
  );
}
