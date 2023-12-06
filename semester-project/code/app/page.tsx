import HeroSection from "./_components/HeroSection";
import HomeAboutSection from "./_components/HomeAboutSection";

function Home() {
  return (
    <main className="flex flex-col justify-between items-center">
      <HeroSection />
      <HomeAboutSection />
    </main>
  );
}


export default Home;
