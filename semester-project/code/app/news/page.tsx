"use client"

import Link from "next/link";
import { useEffect, useState } from 'react';
import ArticleCard from "./components/ArticleCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faMoneyBill, faRecycle, faTimes, faTrash, faTruck } from "@fortawesome/free-solid-svg-icons";


export interface Article {
  id: number;
  category: string;
  title: string;
  image: string;
  content: string;
}


const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://binbuddy-server.vercel.app/database/articles.json');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);

  const [greenButBord, setGreenButBord] = useState("rounded-3xl border-2 border-brand-green-500 p-2 font-abeezee font-medium mb-4 mr-2");
  const [greenButBackg, setGreenButBackg] = useState("mr-2 text-brand-green-500");
  const [greyButBord, setGreyButBord] = useState("rounded-3xl border-2 border-brand-grey-500 p-2 font-abeezee font-medium mb-4 mr-2");
  const [greyButBackg, setGreyButBackg] = useState("mr-2 text-brand-grey-500");
  const [blueButBord, setBlueButBord] = useState("rounded-3xl border-2 border-brand-blue-500 p-2 font-abeezee font-medium mb-4 mr-2");
  const [blueButBackg, setBlueButBackg] = useState("mr-2 text-brand-blue-500");
  const [brownButBord, setBrownButBord] = useState("rounded-3xl border-2 border-brand-brown-500 p-2 font-abeezee font-medium mb-4 mr-2");
  const [brownButBackg, setBrownButBackg] = useState("mr-2 text-brand-brown-500");
  const [blackButBord, setBlackButBord] = useState("rounded-3xl border-2 border-brand-black-500 p-2 font-abeezee font-medium mb-4 mr-2");
  const [blackButBackg, setBlackButBackg] = useState("mr-2 text-brand-black-500");

  const filteredArticles = selectedCategory ? articles.filter(article => article.category == selectedCategory) : articles;
  const handleButtonClick = (color: string) =>{

    if(color == "green"){
      setGreenButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-green-500 text-white");
      setGreenButBackg("mr-2 text-white");
      setSelectedCategory("bills")

      setGreyButBord("rounded-3xl border-2 border-brand-grey-500 p-2 font-abeezee font-medium mb-4 mr-2")
      setGreyButBackg("mr-2 text-brand-grey-500")
      setBlueButBord("rounded-3xl border-2 border-brand-blue-500 p-2 font-abeezee font-medium mb-4 mr-2")
      setBlueButBackg("mr-2 text-brand-blue-500")
      setBrownButBord("rounded-3xl border-2 border-brand-brown-500 p-2 font-abeezee font-medium mb-4 mr-2");
      setBrownButBackg("mr-2 text-brand-nrown-500");
      setBlackButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-black-500 bg-opacity-70 text-white");
      setBlackButBackg("mr-2 text-white");
    }
    if(color == "grey"){
      setGreyButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-grey-500 text-white");
      setGreyButBackg("mr-2 text-white");
      setSelectedCategory("binBuddy")

      setGreenButBord("rounded-3xl border-2 border-brand-green-500 p-2 font-abeezee font-medium mb-4 mr-2");
      setGreenButBackg("mr-2 text-brand-green-500");
      setBlueButBord("rounded-3xl border-2 border-brand-blue-500 p-2 font-abeezee font-medium mb-4 mr-2")
      setBlueButBackg("mr-2 text-brand-blue-500")
      setBrownButBord("rounded-3xl border-2 border-brand-brown-500 p-2 font-abeezee font-medium mb-4 mr-2");
      setBrownButBackg("mr-2 text-brand-nrown-500");
      setBlackButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-black-500 bg-opacity-70 text-white");
      setBlackButBackg("mr-2 text-white");
    }
    if(color == "blue"){
      setBlueButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-blue-500 text-white");
      setBlueButBackg("mr-2 text-white");
      setSelectedCategory("recycle")

      setGreenButBord("rounded-3xl border-2 border-brand-green-500 p-2 font-abeezee font-medium mb-4 mr-2");
      setGreenButBackg("mr-2 text-brand-green-500");
      setGreyButBord("rounded-3xl border-2 border-brand-grey-500 p-2 font-abeezee font-medium mb-4 mr-2")
      setGreyButBackg("mr-2 text-brand-grey-500")
      setBrownButBord("rounded-3xl border-2 border-brand-brown-500 p-2 font-abeezee font-medium mb-4 mr-2");
      setBrownButBackg("mr-2 text-brand-brown-500");
      setBlackButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-black-500 bg-opacity-70 text-white");
      setBlackButBackg("mr-2 text-white");
    }
    if(color == "brown"){
      setBrownButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-brown-500 text-white");
      setBrownButBackg("mr-2 text-white");
      setSelectedCategory("wasteCollection")

      setGreenButBord("rounded-3xl border-2 border-brand-green-500 p-2 font-abeezee font-medium mb-4 mr-2");
      setGreenButBackg("mr-2 text-brand-green-500");
      setGreyButBord("rounded-3xl border-2 border-brand-grey-500 p-2 font-abeezee font-medium mb-4 mr-2")
      setGreyButBackg("mr-2 text-brand-grey-500")
      setBlueButBord("rounded-3xl border-2 border-brand-blue-500 p-2 font-abeezee font-medium mb-4 mr-2")
      setBlueButBackg("mr-2 text-brand-blue-500")
      setBlackButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-black-500 bg-opacity-70 text-white");
      setBlackButBackg("mr-2 text-white");
    }
    if(color == "black"){
      setBlackButBord("rounded-3xl border-2 border-white p-2 font-abeezee font-medium mb-4 mr-2 bg-brand-black-500 text-white");
      setBlackButBackg("mr-2 text-white");
      setSelectedCategory("")

      setGreenButBord("rounded-3xl border-2 border-brand-green-500 p-2 font-abeezee font-medium mb-4 mr-2");
      setGreenButBackg("mr-2 text-brand-green-500");
      setGreyButBord("rounded-3xl border-2 border-brand-grey-500 p-2 font-abeezee font-medium mb-4 mr-2")
      setGreyButBackg("mr-2 text-brand-grey-500")
      setBlueButBord("rounded-3xl border-2 border-brand-blue-500 p-2 font-abeezee font-medium mb-4 mr-2")
      setBlueButBackg("mr-2 text-brand-blue-500")
      setBrownButBord("rounded-3xl border-2 border-brand-brown-500 p-2 font-abeezee font-medium mb-4 mr-2");
      setBrownButBackg("mr-2 text-brand-brown-500");
    }


  }
  if(selectedCategory == null || selectedCategory == ""){
    return (
      <section className="container flex flex-col items-center">
        <div className="text-center mt-4">
          <h1 className="sm:block font-abeezee text-3xl font-extrabold text-bg-brand-black-500 mb-14">
            News
          </h1>
        </div>
  
        <div className="flex flex-row gap-2 items-baseline">
          <FontAwesomeIcon icon={faFilter} />
          <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-8">
            Filter Category
          </h2>
        </div>
  
        <div className="flex flex-row gap-5 mt-4 justify-center items-center mb-14">
          <button className={greenButBord} onClick={() => handleButtonClick("green")} >
            <FontAwesomeIcon icon={faMoneyBill} className={greenButBackg} />
            Bills 
          </button>
          <button className={greyButBord} onClick={() => handleButtonClick("grey")} >
            <FontAwesomeIcon icon={faTrash} className={greyButBackg} />
            binBuddy 
          </button>
          <button className={blueButBord} onClick={() => handleButtonClick("blue")} >
            <FontAwesomeIcon icon={faRecycle} className={blueButBackg} />
            Recycle 
          </button>
          <button className={brownButBord} onClick={() => handleButtonClick("brown")} >
            <FontAwesomeIcon icon={faTruck} className={brownButBackg} />
            Waste Collection 
          </button>
        </div>
  
  
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, id) => (
            <Link key={article.id} href={`news/${article.id}`} ><ArticleCard key={article.id} article={article} /></Link>
          ))}
        </div>
      </section>
    );
  }
  else{
    return (
      <section className="container flex flex-col items-center">
        <div className="text-center">
          <h1 className="sm:block font-abeezee text-3xl font-extrabold text-bg-brand-black-500 mb-14">
            News
          </h1>
        </div>

        <div className="flex flex-row gap-2 items-baseline">
          <FontAwesomeIcon icon={faFilter} />
          <h2 className="sm:block font-abeezee text-xl font-extrabold text-brand-black-500 mb-8">
            Filter Category
          </h2>
        </div>

        <div className="flex flex-row gap-5 mt-4 justify-center items-center">
          <button className={greenButBord} onClick={() => handleButtonClick("green")} >
            <FontAwesomeIcon icon={faMoneyBill} className={greenButBackg} />
            Bills 
          </button>
          <button className={greyButBord} onClick={() => handleButtonClick("grey")} >
            <FontAwesomeIcon icon={faTrash} className={greyButBackg} />
            binBuddy 
          </button>
          <button className={blueButBord} onClick={() => handleButtonClick("blue")} >
            <FontAwesomeIcon icon={faRecycle} className={blueButBackg} />
            Recycle 
          </button>
          <button className={brownButBord} onClick={() => handleButtonClick("brown")} >
            <FontAwesomeIcon icon={faTruck} className={brownButBackg} />
            Waste Collection 
          </button>
        </div>

        <div className="flex flex-row gap-5 justify-center items-center mb-14">
          <button className={blackButBord} onClick={() => handleButtonClick("black")} >
            <FontAwesomeIcon icon={faTimes} className={blackButBackg} />
            Discard Filter
          </button>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article,id) => (
            <Link key={article.id} href={`news/${article.id}`} ><ArticleCard key={article.id} article={article} /></Link>
          ))}
        </div>
      </section>
    );}
};

export default News;