import Division from "@/components/common/Division";
import HomePage from "@/components/main/homePage/HomePage";
import Support from "@/components/main/support/Support";
import Store from "@/components/main/store/Store";
import Footer from "@/components/main/footer/Footer";
import MainTitle from "@/components/main/mainTitle/MainTitle";

export default function Home() {
  return (
    <>
      <MainTitle/>

      <HomePage/>

      <Division/>

      <Support/>

      <Division/>
      
      <Store/>

      <Footer/>
    </>
  );
}
