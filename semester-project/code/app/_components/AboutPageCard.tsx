import Image, { StaticImageData } from "next/image";


export type AboutPageCardProps = {
  image: StaticImageData;
  title: string;
  body: string;
};

const AboutPageCard = ({
  image,
  title,
  body,
}: AboutPageCardProps) => (
  <div className="flex flex-col max-w-[550px] min-w-[300px] xl:max-w-[450px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      className="w-full h-48 object-cover object-center"
      sizes="50vw"
      src={image}
      placeholder="blur"
      alt="Card header"
    />
    <div className="flex-1 flex flex-col justify-between px-6 py-4">
      <div className="mb-8">
        <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4">
          {title}
        </h2>
        <p className="font-abeezee text-brand-black-500 leading-6">{body}</p>
      </div>
    </div>
  </div>
);

export default AboutPageCard;
