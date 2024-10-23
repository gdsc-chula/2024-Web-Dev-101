import React from "react";
import Header from "../components/Header";
import StoryCard from "../components/StoryCard";

function page() {
  const Stories = [
    {
      id: 1,
      imgSrc:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      displayName: "The Coffee Lover",
      content:
        "I love coffee so much that I drink it every day. It's my favorite drink in the world!",
    },
    {
      id: 2,
      imgSrc:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      displayName: "The Coffee Hater",
      content:
        "I can't stand coffee. It's too bitter for my taste. I prefer tea or hot chocolate.",
    },
    {
      id: 3,
      imgSrc:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      displayName: "The Coffee Addict",
      content:
        "I drink coffee all day long. I can't function without it. It's like my lifeblood.",
    },
    {
      id: 4,
      imgSrc:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      displayName: "The Coffee Connoisseur",
      content:
        "I'm a coffee snob. I only drink the finest, most expensive coffee beans. Anything less is unacceptable.",
    },
    {
      id: 5,
      imgSrc:
        "https://www.gstatic.com/devrel-devsite/prod/v0e3f58103119c4df6fb3c3977dcfd0cb669bdf6385f895761c1853a4b0b11be9/firebase/images/touchicon-180.png",
      displayName: "The Coffee Newbie",
      content:
        "I'm just getting into coffee. I'm still trying to figure out what I like and don't like. It's a fun journey!",
    },
  ];
  return (
    <div>
      <Header />

      <section className="flex flex-col gap-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl text-center">
          What's brewing in the community?
        </h2>
        <div className="w-screen h-auto grid lg:grid-cols-3 gap-4 px-8">
          {Stories.map((story) => (
            <StoryCard
              imgSrc={story.imgSrc}
              displayName={story.displayName}
              content={story.content}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
