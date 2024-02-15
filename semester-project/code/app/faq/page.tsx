import faqData from "@/public/json/faqData.json"
import Button from "@/components/Button"
import Link from "next/link"

export const metadata = {
    title: "FAQ",
};

export default function FAQ() {
    return(
        <div className="flex flex-col max-w-[850px] min-w-[300px] xl:max-w-[850px] mx-auto bg-white overflow-hidden mb-10">
             <div className="flex-1 flex flex-col justify-between px-6 py-4 text-center">
                <div className="mb-8 items-center">
                    <h1 className="sm:block font-abeezee text-3xl font-extrabold text-brand-black-500 mb-8">
                    {faqData.FAQ.title}
                    </h1>

                    <div className="text-left">
                        <p className="font-abeezee text-brand-black-500 leading-6">{faqData.FAQ.description}</p>
                        <br />
                        <br />

                        <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-4">
                        {faqData.FAQ.questions.question1}
                        </h2>
                        <p className="font-abeezee text-brand-black-500 leading-6">{faqData.FAQ.questions.answer1}</p>
                        <br />
                        <br />

                        <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-4">
                        {faqData.FAQ.questions.question2}
                        </h2>
                        <p className="font-abeezee text-brand-black-500 leading-6">{faqData.FAQ.questions.answer2}</p>
                        <br />
                        <br />

                        <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-4">
                        {faqData.FAQ.questions.question3}
                        </h2>
                        <p className="font-abeezee text-brand-black-500 leading-6">{faqData.FAQ.questions.answer3}</p>
                        <br />
                        <br />

                        <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-4">
                        {faqData.FAQ.questions.question4}
                        </h2>
                        <p className="font-abeezee text-brand-black-500 leading-6">{faqData.FAQ.questions.answer4}</p>
                        <br />

                    </div>

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
        </div>
    )}
