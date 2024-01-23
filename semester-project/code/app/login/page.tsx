import Image, { StaticImageData } from "next/image";
import image1 from "@/public/logIn/teamwork.png"

export const metadata = {
    title: "Log in",
  };
  
function LogIn(){
    return(
        <div className="flex flex-col max-w-[850px] min-w-[300px] xl:max-w-[850px] mx-auto bg-white overflow-hidden mb-10">
            
            <div className="flex-1 flex flex-col justify-between px-6 py-4 text-center">
            <div className="mb-8">
                <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4">
                Our sincere apologies!
                </h2>
                <p className="font-abeezee text-brand-black-500 leading-6">
                We are currently working on improving our login page. Thank you for your understanding.
                </p>
            </div>
            </div>
            <Image
            className="w-full h-auto object-cover object-center"
            sizes="50vw"
            src={image1}
            placeholder="blur"
            alt="Card header"
            />
        </div>

    );
}

export default LogIn;