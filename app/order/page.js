"use client";
import React from "react";
import Header from "../components/Header";
import Protected from "../components/Protected";
import { UserAuth } from "../context/authContext";
function page() {
  const { user, googleSignIn, logOut } = UserAuth();
  return (
    <div className="h-screen flex flex-col">
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
      <Header className="flex-1" />
      <section className="relative flex flex-wrap lg:h-full lg:items-center flex-2">
        {user ? (
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                What&apos;s your order today?
              </h1>

              <p className="mt-4 ">
                It doesn’t matter where you’re from – or how you feel… There’s
                always peace in a strong cup of coffee.
              </p>
            </div>

            <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label htmlFor="displayName" className="sr-only">
                  Display Name
                </label>

                <div className="relative">
                  <input
                    type="displayName"
                    className="w-full rounded-lg border-gray-200 bg-secondary p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Display Name"
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="story"
                  className="mt-2 w-full rounded-lg border-gray-200 bg-secondary align-top shadow-sm sm:text-sm"
                  rows="4"
                  placeholder="How's your day going? Share your thoughts here."
                ></textarea>
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-white"
                >
                  Join Conversation
                </button>
              </div>
            </form>
          </div>
        ) : (
          <Protected />
        )}

        <div className="relative hidden lg:flex lg:h-full lg:w-1/2 justify-center align-center">
          <img
            className="w-1/2 "
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/gdg-chula-web-dev.appspot.com/o/Asset%202.svg?alt=media&token=d7f42692-43fa-4482-8686-247b335d3bd2"
          />
        </div>
      </section>
    </div>
  );
}

export default page;
