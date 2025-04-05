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

interface NewsResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export const fetchNews = async (category: string, country: string, query?: string) => {
    try {
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
        const url = query
            ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
            : `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${apiKey}`;
        
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to fetch news:', error);
        return null;
    }
};