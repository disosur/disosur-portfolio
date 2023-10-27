import { Container, Text, Highlight, Divider, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Text fontSize="3xl" p={4}>
        <Highlight
          query={["React", "Next.Js"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}>
          I'm a front-end developer in the Philippines 🇵🇭, specializing in React
          and Next.js. My passion is enhancing user experiences through hands-on
          web development, experimenting with various technologies to create
          enjoyable online projects. 🚀
        </Highlight>
      </Text>

      <Divider />
      <VStack>
        <Text align="center" p={2} as="b">
          What I've used
        </Text>
        <Text align="center" flexDirection="column">
          • Javascript • Typescript • PHP • Next JS • SvelteKit • TailwindCSS •
          ChakraUI • MUI • Scss • NodeJS • MongoDB • MySQL •
        </Text>
      </VStack>
    </Container>
  );
}
