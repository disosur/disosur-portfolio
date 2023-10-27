import { HStack, Box, Text, Heading, Avatar } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Profile() {
  return (
    <Box p={4}>
      <HStack>
        <Box>
          <Avatar size="2xl" name="al" src="https://i.imgur.com/RMX2tuO.jpg" />
        </Box>
        <Box p={4}>
          <Text>Hamlo! I'm</Text>
          <Heading>Alysstair Morales</Heading>
          <Text as="b">A digital artisan</Text>
        </Box>
      </HStack>
      <Box p={4}>
        <Navbar />
      </Box>
    </Box>
  );
}
