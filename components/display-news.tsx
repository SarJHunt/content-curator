"use client"
import React, { useEffect, useState } from 'react';
import { fetchNews } from '@/app/utils/fetchNews';

interface NewsArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchData = async (query?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews('technology', 'us', query); // Default to technology news in the US
      if (data && data.articles) {
        setArticles(data.articles);
      } else {
        setError('No articles found.');
      }
    } catch (err) {
      setError('Failed to fetch news.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(searchTerm);
  };

  useEffect(() => {
    // Fetch default news on initial load
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">News Articles</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for news..."
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* News Articles */}
      <ul className="space-y-4">
        {articles?.map((article, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-700">{article.description}</p>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="w-full h-auto mt-2" />
            )}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;