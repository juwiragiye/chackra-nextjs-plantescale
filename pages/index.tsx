import { Box, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container flexGrow={1}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale" />
        <title>Janvier Uwiragiye - Homepage</title>
      </Head>
      <Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eius
        voluptatem ab commodi quibusdam error quas incidunt illum molestiae
        sapiente sit aut, mollitia magnam at tempora accusantium perspiciatis
        aspernatur rem. sit aut, mollitia magnam at tempora accusantium
        perspiciatis aspernatur rem.
      </Box>
    </Container>
  );
};

export default Home;
