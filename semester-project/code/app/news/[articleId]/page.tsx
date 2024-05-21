"use client"
import { Article } from "../page";
import { useEffect, useState } from 'react';


interface Params {
  articleId: string;
}

function ArticlePage ({ params }: { params: Params }){
  const id = params.articleId;
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://binbuddy-server.vercel.app/database/articles.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        const foundArticle = data.articles.find((article: Article) => article.id === parseInt(id as string));
        setArticle(foundArticle || null);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-5">
      <h1 className="text-3xl font-abeezee font-bold px-2 capitalize mb-5">{article.title}</h1>
      <img src={article.image} alt={article.title} className="mb-4" />
      <p className="font-abeezee text-brand-black-500 leading-6 mt-3">{article.content}</p>
    </main>
  );
};

export default ArticlePage;
