import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Box, Header, Text, SearchContainer } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>People Finder</title>
        <meta name="description" content="Find People" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />

      {/* @todo make this a container */}
      <Box
        as="main"
        css={{
          maxWidth: 610,
          padding: "0 24px",
          mx: "auto",

          "@bp1": {},
        }}
      >
        <Text
          variant="heading1"
          as="h1"
          css={{
            color: "$darkBlue",
            mb: 60,
          }}
        >
          The Person Finder
        </Text>

        <Text
          css={{
            mb: 31,
          }}
        >
          If you just can’t find someone and need to know what they look like,
          you’ve come to the right place! Just type the name of the person you
          are looking for below into the search box!
        </Text>

        <SearchContainer />

        {/* Search Results */}
      </Box>
    </>
  );
};

export default Home;
