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
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10 capitalize mb-4">{article.title}</h1>
      <img src={article.image} alt={article.title} className="mb-4" />
      <p>{article.content}</p>
    </main>
  );
};

export default ArticlePage;
