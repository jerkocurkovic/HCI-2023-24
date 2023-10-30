import { Article } from "../page";

interface Params {
  articleId: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getArticle = async (id: string): Promise<Article> => {
  const data = await fetch(`${BASE_API_URL}/posts/${id}`);
  return data.json();
};

export default async function BlogPost({ params }: { params: Params }) {
  const article = await getArticle(params.articleId);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10 capitalize">
        <span className="text-neutral-400">Article {article.id}:</span> {article.title}
      </h1>
      <p className="text-xl p-10">{article.body}</p>
    </main>
  );
}
