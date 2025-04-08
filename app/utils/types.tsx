export interface PodcastEpisode {
    id: number; // Internal PodcastIndex Feed ID
    title: string; // Name of the feed
    description: string;
    url: string; // Current feed URL
    link: string; // Channel-level link in the feed
    image: string; // Image URL for the podcast
  }

  export interface Book {
      title: string;
      authors: string
      link: string;
      image: string;
    }

