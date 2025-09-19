import HomeRestaurant from "./components/homeRestaurant";
import Header from "./components/header";
import Menu from "./components/menu";
import Testemonials from "./components/testemonials";

export default function Restaurante() {
  return (
    <>
      <Header />
      <main>
        <HomeRestaurant />
        <Menu />
        <Testemonials />
      </main>
    </>
  );
}
