import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <h2 className="text-black">Test</h2>
      <h2 className="text-black">{process.env.apiKey}</h2>
    </div>
  );
}
