"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import StoryCard from "../components/StoryCard";
import { getStory } from "../lib/firebase/firestore";


function Page() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      // const fetchedStories = await getStory(); // if monolithic it's ok
      const response = await fetch("/api/story");
      const fetchedStories = await response.json();
      await console.log(fetchedStories);

      await setStories(fetchedStories);
    };
    fetchStories();
  }, []);
  return (
    <div>
      <Header />
      <section className="flex flex-col gap-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl text-center">
          What&apos;s brewing in the community?
        </h2>
        <div className="w-screen h-auto grid lg:grid-cols-3 gap-4 px-8">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              imgSrc={story.ProfileImg}
              displayName={story.DisplayName}
              content={story.Story}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
