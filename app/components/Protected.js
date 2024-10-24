import React from "react";

function Protected() {
  return (
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Hey there, coffee lover! ☕️
        </h1>

        <p className="mt-4 ">
          Beyond here is Protected Route. You can only access this page if you
          are logged in.
        </p>
      </div>
    </div>
  );
}

export default Protected;
