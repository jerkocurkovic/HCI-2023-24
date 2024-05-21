import Image from "next/image";
import image1 from "@/public/recycle/glass.png"
import image2 from "@/public/recycle/paper.png"
import image3 from "@/public/recycle/plastic.png"
import image4 from "@/public/recycle/organic.png"
import image5 from "@/public/recycle/mixed.png"
import Button from "@/components/Button"
import Link from "next/link";

export const metadata = {
    title: "Recycle",
  };
  

function Recycle(){
    return(
        <section className="container flex flex-col gap-10 lg:gap-20 items-center">
        <div className="text-center mt-4">
          <h1 className="sm:block font-abeezee text-3xl font-extrabold text-bg-brand-black-500 mb-8">
          Recycle
          </h1>
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center">
        <Button
            green
            className="text-base xl:text-lg xl:px-8"
            iconClassName="xl:w-4 xl:h-4"
            >
              <Link href="#glassRecycling">Glass Recycling</Link>
          </Button>

          <Button
            blue
            className="text-base xl:text-lg xl:px-8"
            iconClassName="xl:w-4 xl:h-4"
            >
              <Link href="#paperRecycling">Paper Recycling</Link>
          </Button>
          <Button
            yellow
            className="text-base xl:text-lg xl:px-8"
            iconClassName="xl:w-4 xl:h-4"
            >
              <Link href="#plasticRecycling">Plastic Recycling</Link>
          </Button>
          <Button
            brown
            className="text-base xl:text-lg xl:px-8"
            iconClassName="xl:w-4 xl:h-4"
            >
              <Link href="#organicWasteRecycling">Organic Waste Recycling</Link>
          </Button>
          <Button
            black
            className="text-base xl:text-lg xl:px-8"
            iconClassName="xl:w-4 xl:h-4"
            >
              <Link href="#mixedWasteRecycling">Mixed Waste Recycling</Link>
          </Button>
        </div>

        <div className="flex-col gap-20">
          <div id="glassRecycling" className=" flex md:flex-row flex-col mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <Image
            className="md:w-48 w-full md:h-48 h-auto object-cover object-center"
            sizes="50vw"
            src={image1}
            placeholder="blur"
            alt="Card header"
            />
            <div className="flex-1 flex flex-col justify-between px-6 py-4">
              <div className="mb-8">
                <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4 text-center">
                  Glass Recycling
                </h2>
                
                <p className="font-abeezee text-brand-black-500 leading-6 mb-2">
                Glass is one of the easiest materials to recycle. It can be endlessly recycled without losing quality.
                 Did you know that it can take up to 1 million years for glass to decompose in a landfill?
                </p>
                <div className="flex md:flex-row flex-col">
                  <p className="font-abeezee text-brand-green-500 leading-6">
                  Instructions: 
                  </p>
                  <p className="font-abeezee text-brand-black-500 leading-6">
                   Rinse glass bottles and jars thoroughly before placing them in the recycling bin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="paperRecycling" className=" flex md:flex-row flex-col mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <Image
            className="md:w-48 w-full md:h-48 h-auto object-cover object-center"
            sizes="50vw"
            src={image2}
            placeholder="blur"
            alt="Card header"
            />
            <div className="flex-1 flex flex-col justify-between px-6 py-4">
              <div className="mb-8">
                <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4 text-center">
                  Paper Recycling
                </h2>
                
                <p className="font-abeezee text-brand-black-500 leading-6 mb-2">
                Paper recycling helps to save trees and reduce energy consumption.
                 Did you know that it takes about 2 to 4 weeks for paper to decompose?
                </p>
                <div className="flex md:flex-row flex-col">
                  <p className="font-abeezee text-brand-blue-500 leading-6">
                  Instructions: 
                  </p>
                  <p className="font-abeezee text-brand-black-500 leading-6">
                  Remove any contaminants, such as food or grease, from paper products before recycling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="plasticRecycling" className=" flex md:flex-row flex-col mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <Image
            className="md:w-48 w-full md:h-48 h-auto object-cover object-center"
            sizes="50vw"
            src={image3}
            placeholder="blur"
            alt="Card header"
            />
            <div className="flex-1 flex flex-col justify-between px-6 py-4">
              <div className="mb-8">
                <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4 text-center">
                  Plastic Recycling
                </h2>
                
                <p className="font-abeezee text-brand-black-500 leading-6 mb-2">
                Plastic recycling is crucial for reducing plastic pollution in oceans and landfills. However, not all plastics are recyclable.
                 Did you know that it can take up to 1,000 years for plastic to decompose?
                </p>
                <div className="flex md:flex-row flex-col">
                  <p className="font-abeezee text-brand-yellow-500 leading-6">
                  Instructions: 
                  </p>
                  <p className="font-abeezee text-brand-black-500 leading-6">
                  Check the recycling symbol on plastic products to determine if they are recyclable in your area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="organicWasteRecycling" className=" flex md:flex-row flex-col mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <Image
            className="md:w-48 w-full md:h-48 h-auto object-cover object-center"
            sizes="50vw"
            src={image4}
            placeholder="blur"
            alt="Card header"
            />
            <div className="flex-1 flex flex-col justify-between px-6 py-4">
              <div className="mb-8">
                <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4 text-center">
                  Organic Waste Recycling
                </h2>
                
                <p className="font-abeezee text-brand-black-500 leading-6 mb-2">
                Composting organic waste helps to reduce greenhouse gas emissions and enrich the soil.
                 Did you know that organic waste can decompose within a few weeks to a few months?
                </p>
                <div className="flex md:flex-row flex-col">
                  <p className="font-abeezee text-brand-brown-500 leading-6">
                  Instructions: 
                  </p>
                  <p className="font-abeezee text-brand-black-500 leading-6">
                  Collect fruit and vegetable scraps, eggshells, and yard waste in a compost bin or pile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="mixedWasteRecycling" className=" flex md:flex-row flex-col mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <Image
            className="md:w-48 w-full md:h-48 h-auto object-cover object-center"
            sizes="50vw"
            src={image5}
            placeholder="blur"
            alt="Card header"
            />
            <div className="flex-1 flex flex-col justify-between px-6 py-4">
              <div className="mb-8">
                <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4 text-center">
                  Mixed Waste Recycling
                </h2>
                
                <p className="font-abeezee text-brand-black-500 leading-6 mb-2">
                Mixed waste consists of materials that cannot be easily separated for recycling.
                 Proper disposal of mixed waste is essential to minimize environmental impact.
                 Did you know that some items in mixed waste can take hundreds of years to decompose?
                </p>
                <div className="flex md:flex-row flex-col">
                  <p className="font-abeezee text-brand-black-500 leading-6">
                  Instructions: 
                  </p>
                  <p className="font-abeezee text-brand-black-500 leading-6">
                  Follow local guidelines for disposing of mixed waste, and try to minimize its production.
                  </p>
                </div>
              </div>
            </div>
          </div>
      




        </div>
      </section>

    );
}

export default Recycle;