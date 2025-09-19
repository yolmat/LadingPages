import HomeRestaurant from "./components/homeRestaurant";
import Header from "./components/header";
import Menu from "./components/menu";
import Testemonials from "./components/testemonials";
import Footer from "./components/footer";

export default function Restaurante() {
  return (
    <>
      <Header />
      <main>
        <HomeRestaurant />
        <Menu />
        <Testemonials />
        <Footer />
      </main>
    </>
  );
}
