import Image, { StaticImageData } from "next/image";
import image1 from "@/public/logIn/teamwork.png"

export const metadata = {
    title: "Log in",
  };
  
function LogIn(){
    return(
        /*<main className="flex justify-center text-4xl p-14">
            <div className="bg-white rounded-lg font-abeezee text-center">
                <h1 className="text-3xl font-bold mb-4">Our sincere apologies!</h1>
                <p>We are currently working on improving our login page. Thank you for your understanding.</p>
                <div className="flex-shrink-0 relative h-60 w-80 hidden lg:block">
                <Image
                    src={image1}
                    alt={`Teamwork`}
                    fill
                    style={{
                    objectFit: "cover",
                    }}
                />
                </div>
            </div>
        </main>*/
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