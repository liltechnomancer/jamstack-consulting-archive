import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/waf0vus.css"/>
      </Head>

      <main className="h-full">
        <section className="h-full relative max-w-full m-auto">
          <div className="overflow-visible flex flex-row justify-between">
            <h1 className="font-Bello p-2 z-10 text-white text-xl">Jamstack.consulting</h1>
            <button style={{ backgroundColor: "#00ebc7" }} className="z-10 p-2 font-bold m-2 rounded-full font-Azo-Sans text-white ">See the future</button>
          </div>  
          <div className="h-full flex items-center justify-center overflow-visible">
            <h1 className="z-10 relative w-64 md:w-max md:max-w-2xl text-4xl -mt-32 md:-mt-52 md:text-5xl font-Azo-Sans font-black text-yellow-300">
              Most websites are built on technology from when Blockbuster was{" "}
              <br /> still renting VHS.
            </h1>
            <div className="z-0 absolute inset-0 hero-pattern" />
          </div>
          <Image
            src="/wave-haikei-4.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
          />
        </section>
        <section
          style={{ backgroundColor: "#111827" }}
          className="h-full py-10"
        >
          <div className="text-white max-w-2xl m-auto">
            <h2 style={{ color: "#00ebc7" }} className="text-3xl font-Azo-Sans font-black">
              A lot has changed since 2003
            </h2>
            <p className="text-xl font-Azo-Sans font-black">
              Maybe your webstack should change too.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
