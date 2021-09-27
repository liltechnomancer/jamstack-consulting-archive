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
          <div className="h-full flex items-center justify-center overflow-visible">
            <h1 className="z-10 relative w-64 md:w-max md:max-w-2xl text-4xl -mt-32 md:-mt-52 md:text-5xl font-Azo-Sans font-black text-yellow-300">
              Most websites are built on technology from when Blockbuster was{" "}
              <br /> still renting VHS.
            </h1>
            {/* <div className="z-0 -top-full absolute inset-0">
              <svg
                className="flex m-0 overflow-visible"
                viewBox="0 0 200 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FF0066"
                  d="M41.7,-63C53.9,-56.9,63.8,-45.3,65.5,-32.6C67.1,-19.9,60.5,-6.1,54.2,4.7C47.9,15.5,41.9,23.3,35.5,31C29.2,38.7,22.5,46.4,13.1,52.8C3.7,59.2,-8.4,64.5,-22.3,65.3C-36.3,66.1,-52.1,62.5,-59.4,52.4C-66.7,42.3,-65.5,25.8,-68.9,9.3C-72.2,-7.3,-80.2,-23.8,-75.4,-34.5C-70.6,-45.3,-53.1,-50.4,-38.4,-55.3C-23.7,-60.2,-11.9,-65,1.4,-67.2C14.7,-69.4,29.4,-69,41.7,-63Z"
                  transform="translate(90 100) scale(1.5, 1.2) rotate(30)"
                />
              </svg>
            </div> */}

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

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  );
}
