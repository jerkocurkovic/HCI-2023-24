import Button from "@/components/Button"
import Link from "next/link"

export const metadata = {
    title: "Terms of Use",
};


export default function TermsOfUse() {
    return(
        <div className="flex flex-col max-w-[850px] min-w-[300px] xl:max-w-[850px] mx-auto bg-white overflow-hidden mb-10">
            
            <div className="flex-1 flex flex-col justify-between px-6 py-4 text-center">
                <div className="mb-8 items-center">
                    <h1 className="sm:block font-abeezee text-3xl font-extrabold text-brand-black-500 mb-8">
                    Terms of Use
                    </h1>

                    <div className="text-left">
                        <p className="font-abeezee text-brand-black-500 leading-6">Welcome to binBuddy!</p>
                        <br />
                        <p className="font-abeezee text-brand-black-500 leading-6">These terms and conditions outline the rules and regulations for the use of binBuddy's Website,
                            located at
                        </p>
                        <p className="font-abeezee text-brand-green-600"><Link href="/">binbuddy.vercel.app.</Link></p>
                        <br />
                        <p className="font-abeezee text-brand-black-500 leading-6">By accessing this website, we assume you accept these terms and conditions. Do not continue to use binBuddy
                            if you do not agree to take all of the terms and conditions stated on this page.
                        </p>
                        <br />
                        <p className="font-abeezee text-brand-black-500 leading-6">The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
                            "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions.
                            "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client
                            and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our
                                assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of
                                provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands.
                                Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or
                                they, are taken as interchangeable and therefore as referring to same.
                        </p>

                        <br />
                        <br />

                        <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-8">
                        Cookies
                        </h2>
                        <p className="font-abeezee text-brand-black-500 leading-6">We employ the use of cookies. By accessing binBuddy, you agreed to
                        use cookies in agreement with the binBuddy's Privacy Policy.
                        </p>
                        <br />
                        <p className="font-abeezee text-brand-black-500 leading-6">Most interactive websites use cookies to let us retrieve the user’s
                        details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier
                        for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                        </p>
                        <br />
                        <br />
                        
                        <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-8">
                        License
                        </h2>
                        <p className="font-abeezee text-brand-black-500 leading-6">Unless otherwise stated, binBuddy and/or its licensors own
                        the intellectual property rights for all material on binBuddy. All intellectual property rights are reserved.
                        You may access this from binBuddy for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>
                        <br />
                        <h3 className="sm:block font-abeezee text-l font-extrabold text-brand-black-500 mb-2">
                        You must not:
                        </h3>
                        <ul>
                            <li>Republish material from binBuddy</li>
                            <li>Sell, rent or sub-license material from binBuddy</li>
                            <li>Reproduce, duplicate or copy material from binBuddy</li>
                            <li>Redistribute content from binBuddy</li>
                        </ul>
                        <br />
                        <p className="font-abeezee text-brand-black-500 leading-6">This Agreement shall begin on the date hereof.</p>
                        <br />
                        <p className="font-abeezee text-brand-black-500 leading-6">Parts of this website offer an opportunity for users to post and
                        exchange opinions and information in certain areas of the website. binBuddy does not filter, edit, publish or review
                        Comments prior to their presence on the website. Comments do not reflect the views and opinions of binBuddy,its agents
                        and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the
                            extent permitted by applicable laws, binBuddy shall not be liable for the Comments or for any liability, damages or
                            expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this
                            website.
                        </p>
                        <br />
                        <p className="font-abeezee text-brand-black-500 leading-6">binBuddy reserves the right to monitor all Comments and to remove
                        any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                        </p>
                        <br />
                        <h3 className="sm:block font-abeezee text-l font-extrabold text-brand-black-500 mb-2">
                            You warrant and represent that:
                        </h3>
                        <ul>
                            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                            <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                        </ul>
                        <br />
                        <p className="font-abeezee text-brand-black-500 leading-6">You hereby grant binBuddy a non-exclusive license to use, reproduce,
                        edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                        </p>
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
    ) 
  }
