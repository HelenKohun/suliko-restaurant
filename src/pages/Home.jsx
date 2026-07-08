import Hero from "../sections/Hero";
import About from "../sections/About";
import SignatureDishes from "../sections/SignatureDishes";
import WineExperience from "../sections/WineExperience";
import ReservationCTA from "../sections/ReservationCTA";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo page="home" />
      <Hero />
      <About />
      <SignatureDishes />
      <WineExperience />
      <ReservationCTA />
    </>
  );
}
