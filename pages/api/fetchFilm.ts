import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

interface Film {
  id: number;
  title: string;
  description: string;
  url: string;
  link: string;
  image: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { query } = req.query;

  // Load API Secret from secret.txt file
  const secretFilePath = path.resolve('./public/secret.txt'); // Ensure secret.txt is placed in the public folder
  let apiSecret = '';
  try {
    apiSecret = fs.readFileSync(secretFilePath, 'utf8').trim();
    console.log('API Secret from file:', apiSecret);
  } catch (error) {
    console.error('Error reading secret.txt:', (error as Error).message);
    return res.status(500).json({ message: 'Failed to load API secret' });
  }

  const apiKey = process.env.MY_API_KEY?.trim();

  if (!apiKey || !apiSecret) {
    console.error('API keys not configured.');
    return res.status(500).json({ message: 'API keys not configured' });
  }

  const apiHeaderTime = Math.floor(Date.now() / 1000); // Current UTC Unix time in seconds
  const authString = `${apiKey}${apiSecret}${apiHeaderTime}`; // Concatenate apiKey, raw apiSecret, and unixTime
  const authHash = crypto.createHash('sha1').update(authString).digest('hex'); // Generate SHA-1 hash

  try {
    const response = await fetch(
      `https://api.podcastindex.org/api/1.0/search/byterm?q=${query}`,
      {
        headers: {
          'User-Agent': 'content-curator/1.0',
          'X-Auth-Date': apiHeaderTime.toString(),
          'X-Auth-Key': apiKey,
          Authorization: authHash,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    const films: Film[] = data.feeds.map((feed: any) => ({
      id: feed.id,
      title: feed.title,
      description: feed.description,
      url: feed.url,
      link: feed.link,
      image: feed.image,
    }));

    res.status(200).json({ films });
  } catch (error: any) {
    console.error('Error fetching film data:', error);
    res.status(500).json({ message: error.message });
  }
}
