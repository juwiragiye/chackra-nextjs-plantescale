import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Link as ChakraLink,
  useColorMode,
  textDecoration,
} from "@chakra-ui/react";

import Link from "next/link";
import { IoMdHome, IoMdMoon, IoMdSunny } from "react-icons/io";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      as="nav"
      justifyContent={"space-between"}
      alignItems={"center"}
      py={3}
    >
      <Heading fontSize={"sm"}>Janvi.</Heading>
      <HStack alignItems={"center"} spacing={2} fontSize={"md"}>
        <Link href="/talks" passHref>
          <Button
            _hover={{ textDecor: "none", cursor: "pointer" }}
            as={ChakraLink}
            size="sm"
            variant="ghost"
          >
            Talks
          </Button>
        </Link>
        <Link href="/bookmarks" passHref>
          <Button
            _hover={{ textDecor: "none", cursor: "pointer", outline: "2px" }}
            as={ChakraLink}
            size="sm"
            variant="ghost"
          >
            Bookmarks
          </Button>
        </Link>
        <Link href="/blog" passHref>
          <Button
            _hover={{ textDecor: "none", cursor: "pointer" }}
            as={ChakraLink}
            size="sm"
            variant="ghost"
          >
            Blog
          </Button>
        </Link>

        <IconButton
          size={"sm"}
          icon={colorMode === "light" ? <IoMdMoon /> : <IoMdSunny />}
          aria-label="toggle theme"
          variant="ghost"
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
}
