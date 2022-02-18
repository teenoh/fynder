import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Box, Header, Text, SearchContainer } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>People Finder</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Find People" />
      </Head>
      <Header />

      <Box
        as="main"
        css={{
          marginTop: 120,
          maxWidth: 610,
          padding: "0 24px",
          mx: "auto",
        }}
      >
        <Text
          variant="heading1"
          as="h1"
          css={{
            color: "$darkBlue",
            mb: 30,

            "@bp2": {
              mb: 60,
            },
          }}
        >
          The Person Finder
        </Text>

        <Text>
          If you just can’t find someone and need to know what they look like,
          you’ve come to the right place! Just type the name of the person you
          are looking for below into the search box!
        </Text>

        <SearchContainer />
      </Box>
    </>
  );
};

export default Home;
