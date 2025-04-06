import React from 'react';
import NewsList from '../components/display-news';
import { Header } from "../components/layout/header"

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <NewsList />
    </div>
  );
};

export default HomePage;