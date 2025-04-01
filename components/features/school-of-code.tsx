import EmblaCarousel from "@/components/features/carousel"; // Import your carousel component

export default function AboutSchoolOfCode({ onBack }: { onBack: () => void }) {
  const slides = [
    { image: "/carousel/launch_day.png", title: "13-week intensive bootcamp", description: "Training in the industry's best practices and standards, helping participants get a foothold in the tech industry." },
    { image: "/carousel/mentors_2.png", title: "Mentoring", description: "xxxxxxxxxxxxxxxxxxxx" },
    { iframe: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7241531342474088449?compact=1", title: "Hear from bootcampers", description: "Why partner company Experian hired from the School of Code."},
    { image: "/carousel/alumni panel.jpg", title: "xxxx", description: "Description for card 3" },
    { image: "/carousel/soft_skills.png", title: "Acquiring soft skills", description: "Description for card 3" },
    { image: "/carousel/networking.png", title: "Networking", description: "Description for card 3" },
    { image: "/carousel/pair_programming.png", title: "Learning to pair-program", description: "Description for card 3" },
    { image: "/carousel/job_placement.png", title: "Getting hired", description: "Description for card 3" },
    { image: "/carousel/curriculum.png", title: "Structured curriculum", description: "Description for card 3" },
  ];

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onBack}
        className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity mt-6">
        Back to About
      </button>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter my-4 text-center">
        About the School of Code
      </h2>

      {/* Description */}
      <p className="text-muted-foreground mb-6 text-lg text-center max-w-3xl">
      The School of Code started as a free coding bootcamp. Open to anyone, it went from experiment to directly helping more than 1000 people from 0 to 
tech professionals working with some of the world's best companies, and helping people find the confidence, capability, and community to thrive in the future.
      </p>

      {/* Carousel */}
      <div className="w-full max-w-4xl">
        <EmblaCarousel slides={slides} />
      </div>
    </div>
  );
}