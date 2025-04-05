import React from 'react';
import NewsList from '../components/display-news';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <NewsList />
    </div>
  );
};

export default HomePage;