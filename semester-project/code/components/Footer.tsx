//import Logo from "@/components/Logo";
import Icons from "@/components/icons/Icons";
import Image, { StaticImageData } from "next/image";
import logoiconfooter from "@/app/icon.png"
import Link from "next/link";

type TitleProps = {
  children: string;
};

type ListProps = {
  title: string;
  items: string[];
};

const FooterListTitle = ({ children }: TitleProps) => (
  <div className="font-abeezee font-bold text-2xl whitespace-nowrap text-brand-black-500 mb-1 lg:mb-5">
    {children}
  </div>
);

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div>
      <FooterListTitle>{title}</FooterListTitle>
      <ul className="font-abeezee ">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <div className="bg-brand-grey-50">
    <div className="container flex flex-col py-10 items-center gap-10 self-stretch md:max-lg:px-10">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start self-stretch">
        <div className="flex-col items-center justify-between max-w-min gap-2 ml-4 bg-opacity-0">
          <Image
          className="w-110 h-110 object-cover object-center"
          sizes="50vw"
          src={logoiconfooter}
          placeholder="blur"
          alt="logo"
          />
          <span className="font-abeezee font-bold text-2xl whitespace-wrap">
          binBuddy
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-11">
          <FooterList
            title="Useful Resources"
            items={[
              "Terms of Use",
              "Privacy Policy",
              "FAQ",
            ]}
          />
          <div>
            <FooterListTitle>Sitemap</FooterListTitle>
            <ul className="font-abeezee text-brand-black-500 mb-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/map">Map</Link></li>
              <li><Link href="/recycle">Recycle</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/login">Log In</Link></li>
            </ul>
          </div>
          
          <div>
            <FooterListTitle>Contact Us</FooterListTitle>
            <ul className="font-abeezee text-brand-black-500 mb-4">
              <li>123 Green Street, </li>
              <li>EcoVille, Eco State</li>
              <li>54321</li>
            </ul>
            <ul className="font-abeezee text-brand-black-500 mb-4">
              <li className="flex gap-2 items-center">
                <Icons.phone className="w-4" /> +123 456 7890
              </li>
              <li className="flex gap-2 items-center">
                <Icons.envelope className="w-4" />
                info@binbuddy.com
              </li>
            </ul>
            
          </div>
        </div>
      </div>
      <p className="font-abeezee text-brand-black-500 text-base sm:text-lg">
        Copyright @ 2023 binBuddy. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
