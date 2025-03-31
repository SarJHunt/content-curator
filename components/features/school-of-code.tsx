import EmblaCarousel from "@/components/features/carousel"; // Import your carousel component

export default function AboutSchoolOfCode({ onBack }: { onBack: () => void }) {
  const slides = [
    { image: "/nadeem.jpg", title: "Intensive bootcamp", description: "13 weeks of immersive coding experience." },
    { image: "/microsoft visit.jpg", title: "Card 2", description: "Description for card 2" },
    { image: "/alumni panel.jpg", title: "Card 3", description: "Description for card 3" },
  ];

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onBack}
        className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-XL"
      >
        X
      </button>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter my-4 text-center">
        About the School of Code
      </h2>

      {/* Description */}
      <p className="text-muted-foreground mb-6 text-lg text-center max-w-3xl">
      The School of Code started as a free coding bootcamp that has gone from experiment to directly helping almost 1000 people from 0 to 
tech professionals working with some of the world's best companies, and helping people find the confidence, capability, and community to thrive in the future.
      </p>

      {/* Carousel */}
      <div className="w-full max-w-4xl">
        <EmblaCarousel slides={slides} />
      </div>
    </div>
  );
}