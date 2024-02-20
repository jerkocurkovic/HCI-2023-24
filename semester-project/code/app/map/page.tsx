"use client"
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleDroplet, faBottleWater } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


//export const metadata = {
//    title: "Map",
//};
  
function Map(){

    const [imgSource, setImgSource] = useState("/map/blankMap.png");
    const [h2RecTitle, setH2RecTitle] = useState("");
    const [h2RecClass, setH2RecClass] = useState("");
    const [pRecContent, setPRecContent] = useState("");
    const [pClass, setPClass] = useState("");
    const [locationIcon, setLocationIcon] = useState("mr-2 text-white");
    const [linkHref, setLinkHref] = useState("");
    const [linkTarget, setLinkTarget] = useState("");
    const [mapClass, setMapClass] = useState("");
    const [divAbClass, setdivAbClass] = useState("");

    const [h2AbTitle, setH2AbTitle] = useState("");
    const [h2AbClass, setH2AbClass] = useState("");
    const [pAbContent1, setPAbContent1] = useState("");
    const [pAbContent2, setPAbContent2] = useState("");
    const [pAbContent3, setPAbContent3] = useState("");
    const [pAbContent4, setPAbContent4] = useState("");
    const [pAbContent5, setPAbContent5] = useState("");

    //Postavljanje za glass recylcing button
    const [greenButBord, setGreenButBord] = useState("rounded-3xl border-2 border-brand-green-500 p-2 font-abeezee font-medium mb-4 mr-2");
    const [greenButBackg, setGreenButBackg] = useState("mr-2 text-brand-green-500");

    //Postavljanje za plastic recylcing button
    const [blueButBord, setBlueButBord] = useState("rounded-3xl border-2 border-brand-blue-500 p-2 font-abeezee font-medium mb-4 mr-2");
    const [blueButBackg, setBlueButBackg] = useState("mr-2 text-brand-blue-500");

    //Postavljanje za plastic recylcing button
    const [yellowButBord, setYellowButBord] = useState("rounded-3xl border-2 border-brand-yellow-500 p-2 font-abeezee font-medium mb-4 mr-2");
    const [yellowButBackg, setYellowButBackg] = useState("mr-2 text-brand-yellow-500");

    const handleButtonClick = (color: string) => {

        setLocationIcon("mr-2 text-red-600"); //ovo odma jer cim kliknemo odma se pokaze neka lokacija
        setLinkTarget("_blank");
        setH2RecClass("sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-1 mt-3");
        setMapClass("flex flex-col md:ml-60 items-center mt-2");
        setPClass("font-abeezee text-brand-black-500 leading-6");
        setdivAbClass("flex flex-col text-left gap-5 mt-4 justify-top  mb-6 md:pr-40");

        setH2AbClass("sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-4 mt-2");
        
        //ako je glass recycling
        if (color === "green") {

            setH2AbTitle("Glass Recycling Facility");
            setPAbContent1("Welcome to our glass recycling facility located at 924 W Madison St!");
            setPAbContent2("At our facility, we are dedicated to promoting sustainability through the recycling of glass materials. Our advanced technology allows for the efficient processing of various types of glass, including bottles, jars, and containers.")
            setPAbContent3("By recycling glass with us, you contribute to the reduction of waste in landfills and the conservation of natural resources. Glass recycling also helps conserve energy and reduces carbon emissions associated with the production of new glass products.")
            setPAbContent4("We accept glass waste from households, businesses, and industries, providing a convenient and eco-friendly solution for glass disposal.")
            setPAbContent5("Join us at 924 W Madison St to drop off your glass recyclables and be a part of our efforts to create a cleaner and more sustainable future for our planet.")

            setImgSource("/map/glassRe.png");
            setGreenButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-green-500 text-white");
            setGreenButBackg("mr-2 text-white");
            setH2RecTitle("Glass recycling facility");
            setPRecContent("924 W Madison St");
            setLinkHref("https://www.google.com/maps/place/924+W+Madison+St,+Chicago,+IL+60607,+Sjedinjene+Ameri%C4%8Dke+Dr%C5%BEave/@41.8818537,-87.6518753,17z/data=!4m9!1m2!2m1!1s123+Green+Street,+EcoVille,+Eco+State+54321!3m5!1s0x880e2cdb73400081:0x771b4dbbbe6a5569!8m2!3d41.8819213!4d-87.6506295!16s%2Fg%2F11k3xrtdr8?entry=ttu");
            
            setBlueButBord("rounded-3xl border-2 border-brand-blue-500 p-2 font-abeezee font-medium mb-4 mr-2");
            setBlueButBackg("mr-2 text-brand-blue-500");
            setYellowButBord("rounded-3xl border-2 border-brand-yellow-500 p-2 font-abeezee font-medium mb-4 mr-2");
            setYellowButBackg("mr-2 text-brand-yellow-500");

        }
        if (color === "blue") {

            setH2AbTitle("Paper Recycling Facility");
            setPAbContent1("Welcome to our paper recycling facility located at 404 S Canal St!");
            setPAbContent2("At our facility, we are committed to promoting environmental sustainability by recycling paper materials. Our state-of-the-art equipment ensures efficient processing of various types of paper, including newspapers, magazines, cardboard, and office paper.")
            setPAbContent3("Our facility accepts paper waste from residential, commercial, and industrial sources, contributing to the reduction of landfill waste and the conservation of natural resources.")
            setPAbContent4("By choosing to recycle your paper products with us, you are playing a vital role in preserving forests, reducing energy consumption, and minimizing pollution.")
            setPAbContent5("Visit us at 404 S Canal St to drop off your paper recyclables and join us in our mission to create a cleaner and greener environment for future generations.")

            setImgSource("/map/paperRe.png");
            setBlueButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-blue-500 text-white");
            setBlueButBackg("mr-2 text-white");
            setH2RecTitle("Paper recycling facility");
            setPRecContent("404 S Canal St");
            setLinkHref("https://www.google.com/maps/place/404+S+Canal+St,+Chicago,+IL+60607,+Sjedinjene+Ameri%C4%8Dke+Dr%C5%BEave/@41.8756366,-87.6415541,17z/data=!4m9!1m2!2m1!1s123+Green+Street,+EcoVille,+Eco+State+54321!3m5!1s0x880e2c9528c68c8f:0xcdaa25fd2494c3e3!8m2!3d41.8762159!4d-87.6399126!16s%2Fg%2F11c1k229lw?entry=ttu");
            
            setGreenButBord("rounded-3xl border-2 border-brand-green-500 p-2 font-abeezee font-medium mb-4 mr-2");
            setGreenButBackg("mr-2 text-brand-green-500");
            setYellowButBord("rounded-3xl border-2 border-brand-yellow-500 p-2 font-abeezee font-medium mb-4 mr-2");
            setYellowButBackg("mr-2 text-brand-yellow-500");

        }
        if (color === "yellow") {

            setH2AbTitle("Plastic Recycling Facility");
            setPAbContent1("Welcome to our plastic recycling facility located at 407 N Clinton St!");
            setPAbContent2("At our state-of-the-art facility, we are committed to promoting environmental sustainability by recycling various types of plastic materials. From PET bottles to HDPE containers, we process a wide range of plastic products to divert them from landfills and give them a new life.")
            setPAbContent3("Recycling plastic with us not only helps reduce the burden on landfills but also conserves valuable resources and minimizes pollution. By choosing to recycle your plastic waste, you contribute to the conservation of energy and the preservation of ecosystems.")
            setPAbContent4("Our facility accepts plastic waste from households, businesses, and industries, offering a convenient and responsible solution for plastic disposal. Whether it's single-use plastics or durable plastic products, we ensure that they are recycled efficiently to create new products or materials.")
            setPAbContent5("Visit us at 407 N Clinton St to drop off your plastic recyclables and join us in our mission to build a greener and more sustainable future for generations to come.")

            setImgSource("/map/plasticRe.png");
            setYellowButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-yellow-500 text-white");
            setYellowButBackg("mr-2 text-white");
            setH2RecTitle("Plastic recycling facility");
            setPRecContent("407 N Clinton St");
            setLinkHref("https://www.google.com/maps/place/407+N+Clinton+St,+Chicago,+IL+60654,+Sjedinjene+Ameri%C4%8Dke+Dr%C5%BEave/@41.8897895,-87.6424982,17z/data=!4m9!1m2!2m1!1s123+Green+Street,+EcoVille,+Eco+State+54321!3m5!1s0x880e2cc975d4864f:0x7045401c4a0e311a!8m2!3d41.8896099!4d-87.6409961!16s%2Fg%2F11cs80ds4r?entry=ttu");
            
            setGreenButBord("rounded-3xl border-2 border-brand-green-500 p-2 font-abeezee font-medium mb-4 mr-2");
            setGreenButBackg("mr-2 text-brand-green-500");
            setBlueButBord("rounded-3xl border-2 border-brand-blue-500 p-2 font-abeezee font-medium mb-4 mr-2");
            setBlueButBackg("mr-2 text-brand-blue-500");

        }
    };




    return(
        
        <section className="container flex flex-col gap-10 lg:gap-20 items-center">
            <div className="text-center mt-4">
                <h1 className="sm:block font-abeezee text-3xl font-extrabold text-bg-brand-black-500 mb-8">
                Map
                </h1>
            </div>
            <div className="flex flex-row">
                <button className={greenButBord} onClick={() => handleButtonClick("green")}>
                    <FontAwesomeIcon icon={faBottleDroplet} className={greenButBackg} />
                    Glass recycling 
                </button>
                
                <button className={blueButBord} onClick={() => handleButtonClick("blue")}>
                    <FontAwesomeIcon icon={faNewspaper} className={blueButBackg} />
                    Paper recycling 
                </button>

                <button className={yellowButBord} onClick={() => handleButtonClick("yellow")}>
                    <FontAwesomeIcon icon={faBottleWater} className={yellowButBackg} />
                    Plastic recycling 
                </button>
                
            </div>
            <div className=" flex md:flex-row flex-col mx-auto mb-8 justify-between">
                <div className={divAbClass}>
                    <h2 className={h2AbClass}>{h2AbTitle}</h2>
                    <p className={pClass}>{pAbContent1}</p>
                    <p className={pClass}>{pAbContent2}</p>
                    <p className={pClass}>{pAbContent3}</p>
                    <p className={pClass}>{pAbContent4}</p>
                    <p className={pClass}>{pAbContent5}</p>
                </div>
                <div className={mapClass}>
                    <img src={imgSource} alt="Blank map" width="600px" height="300px"/>
                    <h2 className={h2RecClass}>{h2RecTitle}</h2>
                    <p className={pClass}><Link href={linkHref} target={linkTarget}>
                        <FontAwesomeIcon icon={faLocationDot} className={locationIcon} />{pRecContent}
                        </Link>
                    </p>
                </div>

            </div>

        </section>

    );
}

export default Map;

  
  
