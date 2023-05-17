import Head from "next/head";

import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next - Home</title>
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
}
