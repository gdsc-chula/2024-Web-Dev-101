import React from "react";
import Header from "../components/Header";
import StoryCard from "../components/StoryCard";

function page() {
  const Stories = [
    {
      id: 1,
      displayName: "The Coffee Lover",
      content:
        "I love coffee so much that I drink it every day. It's my favorite drink in the world!",
    },
    {
      id: 2,
      displayName: "The Coffee Hater",
      content:
        "I can't stand coffee. It's too bitter for my taste. I prefer tea or hot chocolate.",
    },
  ];
  return (
    <div>
      <Header />

      <section className="flex flex-col gap-8 py-8">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl text-center">
          What's brewing in the community?
        </h2>
        <div className="w-screen h-auto grid lg:grid-cols-3 gap-4 px-8">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
      </section>
    </div>
  );
}

export default page;
