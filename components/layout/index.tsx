import type { PropsWithChildren } from "react";
import { VStack, Container, Box } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

type Props = PropsWithChildren<{}>;

export default function Layout({ children }: Props) {
  return (
    <Container
      display={"flex"}
      maxWidth={"container.md"}
      minH={{ base: "auto", md: "100vh" }}
    >
      <VStack flex={1} alignItems="stretch" spacing={16}>
        <Header />
        <Box flex={1}>{children}</Box>
        <Footer />
      </VStack>
    </Container>
  );
}
