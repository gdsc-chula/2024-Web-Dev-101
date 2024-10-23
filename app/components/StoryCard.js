import React from "react";

function StoryCard({ imgSrc, displayName, content }) {
  return (
    <div>
      <article className="rounded-xl border-2 border-foreground bg-secondary">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" className="block shrink-0">
            <img
              alt=""
              src={imgSrc}
              className="size-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 className="font-medium sm:text-lg">{displayName}</h3>

            <p className="line-clamp-2 text-sm text-gray-700">{content}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default StoryCard;
