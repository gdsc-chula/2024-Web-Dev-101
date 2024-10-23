import Image from "next/image";
import Header from "./components/Header";
import handleLogin from "./handleLogin";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header className="flex-1" />
      <section className="flex-2 h-full  ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 flex flex-col lg:items-center ">
          <img
            className="h-auto w-auto max-w-lg mx-auto"
            src="https://firebasestorage.googleapis.com/v0/b/gdg-chula-web-dev.appspot.com/o/Roast%26Respond%20Logo.png?alt=media&token=10539fec-4c94-4888-aaf5-72de4247141b"
          />

          <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto max-w-xl sm:text-xl/relaxed">
              Roast & Respond is a polling app that blends virtual coffee chats
              with engaging discussions. Brew conversations, share opinions, and
              gather instant feedback in a cozy, cafe-inspired space.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-foreground bg-foreground px-12 py-3 text-sm font-medium text-white hover:bg-background hover:text-foreground focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                onClick={handleLogin}
              >
                Login with Google
              </a>

              <a
                className="block w-full rounded border border-foreground px-12 py-3 text-sm font-medium text-foreground hover:text-white hover:bg-foreground focus:outline-none focus:ring active:bg-foreground sm:w-auto"
                href="#"
              >
                Take a Seat First 🪑☕
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
