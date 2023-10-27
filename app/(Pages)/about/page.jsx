import { Container, Heading, Text, Box } from "@chakra-ui/react";

export default function page() {
  return (
    <Container p={4}>
      <Box>
        <Heading>About Me</Heading>
        <Text fontSize="1xl">
          From the earliest days, I've had an insatiable drive to create. Even
          as a child, I was drawn to crafting things, and that passion has only
          grown over time. At just 13, I delved into design work, and from
          there, I embarked on a creative journey that touched on animation,
          filmmaking, VFX, UX/UI design, and web design. However, I soon
          realized that I wanted to see my designs come to life as functional
          products, not just static visuals. That's when I decided to learn to
          code, and I found it to be a thrilling experience. Coding opened up a
          world of opportunities for me, from assisting computer science
          students in developing UIs for their backend servers to creating
          portfolios for my artist friends and crafting landing pages for small
          businesses. It's been an incredible journey of turning ideas into
          reality, and I can't wait to keep creating and exploring.
        </Text>
      </Box>
      <Box>
        <Heading>Experience</Heading>
        <Text as="b" fontSize="2xl">
          Freelance Web Developer
        </Text>
        <Text>2021-Present</Text>
      </Box>
    </Container>
  );
}
