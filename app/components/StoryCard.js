import React from "react";

function StoryCard() {
  return (
    <div>
      <article className="rounded-xl border-2 border-foreground bg-secondary">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" className="block shrink-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="size-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 className="font-medium sm:text-lg">Display Name</h3>

            <p className="line-clamp-3 text-sm text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, accusantium temporibus iure delectus ut totam natus
              nesciunt ex? Ducimus, enim.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default StoryCard;
