import type { NextApiRequest, NextApiResponse } from 'next';

interface Book {
  title: string;
  authors: string[];
  link: string;
  image: string;
  // description: any; // Decide what you want for description or remove
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { query } = req.query;

  const apiKey = process.env.APIKey; // Assuming this is the correct env variable name
  console.log('Google Books API Key:', apiKey);
  console.log('Received query:', query);

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  if (!apiKey) {
    console.error('API key not configured.');
    return res.status(500).json({ message: 'API key not configured' });
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`,
    );

    console.log('Search query:', query);

    if (!response.ok) {
      console.error(`Google Books API error with status ${response.status}`);
      const errorData = await response.json();
      console.error('Error details:', errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    const books: Book[] = data.items ? data.items.map((item: any) => ({
      title: item.volumeInfo?.title || 'No Title',
      authors: item.volumeInfo?.authors || [],
      link: item.volumeInfo?.infoLink || '',
      image: item.volumeInfo?.imageLinks?.thumbnail || '',
      // description: item.volumeInfo?.description || 'No Description', // Example for description
    })) : [];

    res.status(200).json({ books });
  } catch (error: any) {
    console.error('Error fetching book data:', error);
    res.status(500).json({ message: error.message });
  }
}