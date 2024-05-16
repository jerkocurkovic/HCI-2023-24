import React from 'react';
import Image from 'next/image';

interface Article {
  id: number;
  category: string;
  title: string;
  image: string;
  content: string;
}

interface ArticleCardProps {
  article: Article;
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.substr(0, text.lastIndexOf(' ', maxLength)) + '...';
    return truncatedText;
  };

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {

    const truncatedContent = truncateText(article.content, 47);

  return (
    <div className="flex flex-col max-w-[350px] min-w-[300px] xl:max-w-[450px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover object-center" src={article.image} alt={article.title} />
        <div className="flex-1 flex flex-col justify-between px-6 py-4">
        <div className="mb-8">
            <h2 className="text-2xl font-abeezee font-bold text-brand-black-500 mb-4">
                {article.title}
            </h2>
            <p className="font-abeezee text-brand-black-500 leading-6">{truncatedContent}</p>
        </div>

      </div>
    </div>

  );
};

export default ArticleCard;