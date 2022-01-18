import {
  Box,
  Divider,
  Link,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

import {
  TWITTER_PROFILE,
  GITHUB_PROFILE,
  INSTAGRAM_PROFILE,
} from "../../constants";

const firstGroup = [
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
const secondGroup = [
  {
    href: GITHUB_PROFILE,
    label: "Github",
  },
  {
    href: INSTAGRAM_PROFILE,
    label: "Instagram",
  },
  {
    href: TWITTER_PROFILE,
    label: "Twitter",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
  },
];
const thirdGroup = [
  {
    href: "/uses",
    label: "Uses",
  },
  {
    href: "/Gear",
    label: "Gear",
  },
  {
    href: "/books",
    label: "Books",
  },
];

export default function Footer() {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <VStack as="footer" pt={8} spacing={8} alignItems="space-between">
      <Divider />
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <VStack alignItems="flex-start" as="section">
          {firstGroup.map(({ href, label }) => (
            <NextLink href={href} key={href}>
              <Link color={pathname === href ? "purple.500" : "gray.500"}>
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack as="section" alignItems="flex-start">
          {secondGroup.map(({ href, label }) => (
            <NextLink href={href} passHref key={href}>
              <Link
                href={href}
                isExternal
                target="_blank"
                color={pathname === href ? "purple.500" : "gray.500"}
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack as="section" alignItems="flex-start">
          {thirdGroup.map(({ href, label }) => (
            <NextLink href={href} key={href}>
              <Link color={pathname === href ? "purple.500" : "gray.500"}>
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
      </Stack>
    </VStack>
  );
}
