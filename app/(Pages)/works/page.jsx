import WorkCard from "@/app/components/WorkCard";
import { Container, Box } from "@chakra-ui/react";
import React from "react";
import Exemia from "@/public/works/Exemia.png";

export default function page() {
  return (
    <Container>
      <WorkCard
        Title="Exemia Event Coordinator"
        Image={Exemia}
        alt="Hero section of Exemia Event Coordinator Landing page"
        Link1="https://exemia.vercel.app/"
        Button1="Link to Site"
      />
    </Container>
  );
}
