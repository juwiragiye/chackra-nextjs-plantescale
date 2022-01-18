import { Box, Container, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";

type Props = PropsWithChildren<{}>;

export default function Layout({ children }: Props) {
  return (
    <Container
      display="flex"
      maxW="container.md"
      minH={{ base: "auto", md: "100vh" }}
    >
      <VStack spacing={16} flex={1} alignItems="stretch" minH="100%">
        <Header />
        <Box flex={1}>{children}</Box>
        <Footer />
      </VStack>
    </Container>
  );
}
