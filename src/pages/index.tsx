import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Box } from "../components/Box";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>People Finder</title>
        <meta name="description" content="Find People" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Box
        css={{
          width: 1200,
          mx: "auto",
        }}
      >
        Test
      </Box>
    </div>
  );
};

export default Home;
