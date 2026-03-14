import HeroSlider from "../components/HeroSlider";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import NewsUpdates from "../components/NewsUpdates";

export const metadata = {
  title: "Lokesh Landscape | Power Distribution Company",
  description: "Lokesh Landscape – Delivering safe, reliable, and sustainable power distribution solutions across India since 1989.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSlider />
        <AboutUs />
        <Services />
        <NewsUpdates />
      </main>
    </div>
  );
}