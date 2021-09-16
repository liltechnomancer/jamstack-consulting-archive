import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen ">
        <div className="h-full bg-red-400 relative flex column justify-center overflow-hidden">
          <h1 className="z-10 max-w-2xl text-5xl text-center font-black text-yellow-300 mt-60">Most websites are built on technology from when Blockbuster was still renting VHS.</h1>
          {/* <div class="flex m-2 relative w-40 h-40 sm:pb-0 sm:w-48 sm:h-48 "   ></div> */}
          {/* <div class="bg-repeat w-full h-full text-primary-100 heropattern-wiggle-red-100" >
              <div style="text-shadow: 0 0 4px hsla(0, 0%, 0%, 1)" class="text-sm inline" >heropattern-wiggle-red-500</div>
            </div></div> */}
          <div className="z-0 absolute inset-0 transform scale-150 heropattern-wiggle-red-500" />

          <Image src="/wave-haikei.svg" width="100px" height="100px" layout="fill" objectFit="cover" />

        </div>
      </main >

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div >
  )
}
