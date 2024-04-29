import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full flex justify-center items-center">
        <Link href="/admin" className="">
          <a className="px-20 py-10 rounded-lg bg-blue-900 hover:bg-blue-400 font-extrabold text-white">
            To admin panel
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Home;
