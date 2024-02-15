import privacyPolicyData from "@/public/json/privacyPolicyData.json"
import Button from "@/components/Button"
import Link from "next/link"

export const metadata = {
    title: "Privacy Policy",
};



export default function TermsOfUse() {
    return(
        <div className="flex flex-col max-w-[850px] min-w-[300px] xl:max-w-[850px] mx-auto bg-white overflow-hidden mb-10">
             <div className="flex-1 flex flex-col justify-between px-6 py-4 text-center">
                <div className="mb-8 items-center">
                    <h1 className="sm:block font-abeezee text-3xl font-extrabold text-brand-black-500 mb-8">
                    {privacyPolicyData.PrivacyPolicy.title}
                    </h1>

                    <div className="text-left">
                    <p className="font-abeezee text-brand-black-500 leading-6">{privacyPolicyData.PrivacyPolicy.description}</p>
                    <br />
                    <p className="font-abeezee text-brand-black-500 leading-6">{privacyPolicyData.PrivacyPolicy.contactInfo}</p>
                    <br />
                    <p className="font-abeezee text-brand-black-500 leading-6">{privacyPolicyData.PrivacyPolicy.applicability}</p>
                    <br />
                    <br />

                    <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-8">
                    {privacyPolicyData.PrivacyPolicy.title2}
                    </h2>
                    <p className="font-abeezee text-brand-black-500 leading-6">{privacyPolicyData.PrivacyPolicy.consent}</p>
                    <br />
                    <br />

                    <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-8">
                    {privacyPolicyData.PrivacyPolicy.informationCollection.title}
                    </h2>
                    <p className="font-abeezee text-brand-black-500 leading-6">{privacyPolicyData.PrivacyPolicy.informationCollection.content}</p>
                    <br />
                    <br />

                    <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-8">
                    {privacyPolicyData.PrivacyPolicy.informationUsage.title}
                    </h2>
                    <p className="font-abeezee text-brand-black-500 leading-6">{privacyPolicyData.PrivacyPolicy.informationUsage.content}</p>
                    <br />

                    </div>

                </div>
             </div>
        </div>
    )}