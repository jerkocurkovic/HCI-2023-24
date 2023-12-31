import Image, { StaticImageData } from "next/image";
import Button from "@/components/Button";

import heroImage1 from "@/public/hero/recycleng-woman.jpg";
import heroImage2 from "@/public/hero/recycling-truck.jpg";
import heroImage4 from "@/public/hero/recycling-gang.jpg";
import heroImage3 from "@/public/hero/paying-bills.jpg";



const HeroSection = () => (
  <section className="container flex justify-around items-center gap-50 w-screen mt-4">
    <div className="flex flex-col justify-center gap-50 max-w-xl">
      <h1 className="font-abeezee text-4xl font-extrabold text-brand-black-500 whitespace-break-spaces mb-2">
      binBuddy - Your best friend for waste management!
      </h1>
      <p className="font-abeezee text-lg whitespace-break-spaces">
        Welcome to{" "}
        <span className="font-abeezee font-bold text-xl text-brand-black-500 whitespace-nowrap">
          binBuddy.
        </span>
        , where sustainable living meets smart technology. Our mission is simple: to revolutionize waste management and nurture a greener, cleaner world. Together, lets make every bin count!
      </p>

      <div className="flex gap-5 mt-4 self-center lg:self-start">
        <Button
          green
          className="text-base xl:text-lg xl:px-8"
          iconClassName="xl:w-4 xl:h-4"
        >
          Log in
        </Button>
        <Button
          grey
          className="hidden sm:flex text-base xl:text-lg xl:px-8"
          iconClassName="xl:w-4 xl:h-4"
        >
          About
        </Button>
      </div>

    </div>
    <div className="flex-shrink-0 relative h-60 w-80">
    <Image
        src={heroImage1}
        alt={`Woman recycling`}
        fill
        style={{
        objectFit: "cover",
        }}
    />
          
    </div>
  </section>
);

export default HeroSection;
