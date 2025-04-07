
console.log(process.env.MY_API_SECRET);

import React from 'react';
import PodcastList from '../components/display-results';
import { Header } from "../components/layout/header"

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <PodcastList />
    </div>
  );
};

export default HomePage;