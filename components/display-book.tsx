"use client";
import React, { useState } from 'react';
import { Book } from "../app/utils/types"

const BookList: React.FC = () => {
  const [list, setList] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchData = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/fetchBook?query=${query}`);
      console.log('query:', query);
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data);
  
      if (data && data.books && data.books.length > 0) {
        setList(data.books);
      } else {
        setList([]);
        setError('No books found.');
      }
    } catch (err: any) {
      console.error('Fetch error:', err);
      setError('Failed to fetch books.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setError('Please enter a search term.');
      return;
    }
    fetchData(searchTerm);
  };

  return (
    <div className="p-4">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-4 mt-20">
        <label htmlFor="search" className="sr-only">Search for a book</label>
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

      {/* Books */}
      <ul className="space-y-4">
        {list.map((book, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-700">{book.authors}</p>
            {book.image && (
              <img src={book.image} alt={book.title} className="w-full h-auto mt-2" />
            )}
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              More...
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
