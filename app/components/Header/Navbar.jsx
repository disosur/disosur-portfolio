import { Center, HStack, Box } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  return (
    <Center bg="teal">
      <Box p={3} borderRadius="md" color="white" as="b">
        <HStack spacing="32px">
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/about">About</Link>
        </HStack>
      </Box>
    </Center>
  );
}

export default Navbar;
