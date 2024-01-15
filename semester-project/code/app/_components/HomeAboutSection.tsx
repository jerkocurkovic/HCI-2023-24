import HomeAboutCard, { HomeAboutCardProps } from "./HomeAboutCard";

import about1 from "@/public/homeAbout/recycling-truck.jpg";
import about2 from "@/public/homeAbout/recycling-gang.jpg";
import about3 from "@/public/homeAbout/paying-bills.jpg";

const articles: HomeAboutCardProps[] = [
  {
    image: about1,
    title: "Waste Collection Overview",
    body: "Stay informed with real-time updates on waste collection schedules.Access  historical data to track your waste management progress.",
  },
  {
    image: about2,
    title: "Recycling Helper",
    body: "Helps you improve and  maximize your recycling habbits.",
  },
  {
    image: about3,
    title: "Bills Overview",
    body: "Set up payment reminders to ensure you never miss a bill deadline. Access your billing history to review past transactions and payments.",
  },
];

const HomeAboutSection = () => (
  <section className="container flex flex-col gap-10 lg:gap-20 items-center bg-brand-green-500">
    <div className="text-center mt-4">
      <h1 className="sm:hidden font-abeezee text-3xl font-extrabold text-white">
        How binBuddy works
      </h1>
      <h1 className="hidden sm:block font-abeezee text-3xl font-extrabold text-white">
        How binBuddy works
      </h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {articles.map((articles) => (
        <HomeAboutCard key={articles.title} {...articles} />
      ))}
    </div>
  </section>
);

export default HomeAboutSection;
