import {
  Divider,
  SimpleGrid,
  VStack,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
  TWITTER_PROFILE,
} from "../../constants";

const firstGroud = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/colophon",
    label: "Colophon",
  },
  {
    href: "/talks",
    label: "Talks",
  },
];

const secondGroud = [
  {
    href: TWITTER_PROFILE,
    label: "Twitter",
  },
  {
    href: GITHUB_PROFILE,
    label: "Githhub",
  },
  {
    href: INSTAGRAM_PROFILE,
    label: "Instagram",
  },
  {
    href: "/",
    label: "Twitch",
  },
];
const thirdGroud = [
  {
    href: "/users",
    label: "Users",
  },
  {
    href: "/gear",
    label: "Gear",
  },
  {
    href: "/bookmarks",
    label: "Bookmarks",
  },
  {
    href: "/books",
    label: "Books",
  },
];

export default function Footer() {
  const { pathname } = useRouter();
  return (
    <VStack pd={8} spacing={8}>
      <Divider />
      <Stack
        direction={{ base: "column", md: "row" }}
        w="full"
        justifyContent="space-between"
      >
        <VStack alignItems="flex-start">
          {firstGroud.map((navItem) => (
            <Link href={navItem.href} passHref key={navItem.href}>
              <ChakraLink
                color={pathname === navItem.href ? "purple.500" : "gray.500"}
              >
                {navItem.label}
              </ChakraLink>
            </Link>
          ))}
        </VStack>

        <VStack alignItems="flex-start">
          {secondGroud.map((navItem) => (
            <Link href={navItem.href} passHref key={navItem.href}>
              <ChakraLink color={"gray.500"}>{navItem.label}</ChakraLink>
            </Link>
          ))}
        </VStack>
        <VStack alignItems="flex-start">
          {thirdGroud.map((navItem) => (
            <Link href={navItem.href} passHref key={navItem.href}>
              <ChakraLink
                color={pathname === navItem.href ? "purple.500" : "gray.500"}
              >
                {navItem.label}
              </ChakraLink>
            </Link>
          ))}
        </VStack>
      </Stack>
      <Divider />
    </VStack>
  );
}
