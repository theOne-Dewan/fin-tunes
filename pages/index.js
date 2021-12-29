import { getSession, useSession } from "next-auth/react";
import Center from "../components/center";
import Player from "../components/player";
import Sidebar from "../components/sidebar";
import Head from 'next/head'

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>FinTunes</title>
        <meta name="description" content="Listen to the latest hits and create personalized playlists with this stunning music streaming webApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden scrollbar-hide flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}