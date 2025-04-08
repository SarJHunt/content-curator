

import React from 'react';
import PodcastList from '../components/display-pod';
import BookList from '../components/display-book'
import { Header } from "../components/layout/header"

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <PodcastList />
      <BookList />
    </div>
  );
};

export default HomePage;