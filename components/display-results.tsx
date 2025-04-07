"use client";

import React, { useState } from 'react';
import { PodcastEpisode } from '@/app/utils/types'; // Ensure this path is correct

const PodcastList: React.FC = () => {
  const [list, setList] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchData = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/fetchPod?query=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data && data.episodes && data.episodes.length > 0) {
        setList(data.episodes);
      } else {
        setList([]);
        setError('No episodes found.');
      }
    } catch (err: any) {
      setError('Failed to fetch episodes.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(searchTerm);
  };

  return (
    <div className="p-4">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-4 mt-20">
        <label htmlFor="search" className="sr-only">Search for a podcast</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a subject..."
          className="border p-2 rounded w-full bg-background text-foreground"
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 mt-4 rounded"
        >
          Search
        </button>
      </form>

      {/* Loading and Error Messages */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Podcast Episodes */}
      <ul className="space-y-4">
        {list.map((episode, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{episode.title}</h2>
            <p className="text-gray-700">{episode.description}</p>
            {episode.image && (
              <img src={episode.image} alt={episode.title} className="w-full h-auto mt-2" />
            )}
            <a
              href={episode.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Listen now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
