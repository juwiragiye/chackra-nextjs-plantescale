import {
  Button,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  textDecoration,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      as="nav"
      justifyContent="space-between"
      alignItems={"center"}
      py={4}
    >
      <Heading size="small" pr={5}>
        <NextLink href="/" passHref>
          <Link>Janvi.</Link>
        </NextLink>
      </Heading>

      <HStack alignItems="center" spacing="4">
        <Button size="sm" variant="ghost">
          <NextLink href="/talks" passHref>
            <Link _hover={{ textDecoration: "none" }}>Talks</Link>
          </NextLink>
        </Button>
        <Button size="sm" variant="ghost">
          <NextLink href="/blog" passHref>
            <Link _hover={{ textDecoration: "none" }}>Blog</Link>
          </NextLink>
        </Button>
        <Button size="sm" variant="ghost">
          <NextLink href="/bookmarks" passHref>
            <Link _hover={{ textDecoration: "none" }}>Bookmarks</Link>
          </NextLink>
        </Button>
        <IconButton
          size="sm"
          variant="ghost"
          aria-label="toggle theme"
          icon={colorMode === "light" ? <IoMdMoon /> : <IoMdSunny />}
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
}
