import AboutPageCard,{AboutPageCardProps} from "../_components/AboutPageCard";
import aboutData from '@/public/json/aboutPageData.json';
import appImage  from "../icon.png";
import registerImage from "@/public/about/download_and_register.png"
import vision from "@/public/about/vision.png"
import joinUs from "@/public/about/joinUs.png"

export const metadata = {
    title: "About",
  };

  const articles: AboutPageCardProps[] = [
    {
        image: appImage,
        title: `${aboutData.company.description}`,
        body: `${aboutData.company.mission}`,
    },
    {
        image: registerImage,
        title: `${aboutData.howToUse.tittle}`,
        body: `${aboutData.howToUse.text}`,
    },
    {
        image: vision,
        title: `${aboutData.ourVision.tittle}`,
        body: `${aboutData.ourVision.text}`, 

    },
    {
        image: joinUs,
        title: `${aboutData.joinUs.tittle}`,
        body: `${aboutData.joinUs.text}`, 

    },
  ];
  
function About(){
    return (
        <section className="container flex flex-col gap-10 lg:gap-20 items-center">
        <div className="text-center mt-4">
          <h1 className="hidden sm:block font-abeezee text-3xl font-extrabold text-bg-brand-black-500">
          About {aboutData.company.name}
          </h1>
        </div>
        <div className="flex-col gap-10">
          {articles.map((articles) => (
            <AboutPageCard key={articles.title} {...articles} />
          ))}
        </div>
      </section>
       

    );
}

export default About;




