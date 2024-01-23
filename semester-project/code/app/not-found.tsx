import Image from "next/image"
import image1 from "@/public/notFound/notfound.png"
import Button from "@/components/Button"
import Link from "next/link"

export default function NotFound() {
    return(
        <div className="flex flex-col max-w-[850px] min-w-[300px] xl:max-w-[850px] mx-auto bg-white overflow-hidden mb-10">
            
            <div className="flex-1 flex flex-col justify-between px-6 py-4 text-center">
            <div className="mb-8 items-center">
                <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4">
                Oops...Something went wrong...
                </h2>
                <div className="flex gap-5 mt-4 justify-center items-center">
                    <Button
                    green
                    className="text-base xl:text-lg xl:px-8"
                    iconClassName="xl:w-4 xl:h-4"
                    >
                        <Link href="/">Go back home</Link>
                    </Button>
        
                </div>
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
    ) 
  }