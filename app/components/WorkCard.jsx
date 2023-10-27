import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function WorkCard(props) {
  return (
    <Card>
      <CardHeader>
        <Text fontSize="3xl" as="b">
          {props.Title}
        </Text>
      </CardHeader>
      <CardBody>
        <Image src={props.Image} alt={props.AltImage} />
      </CardBody>
      <CardFooter>
        <Link href={props.Link1}>
          <Button mx={2} colorScheme="teal">
            {props.Button1}
          </Button>
        </Link>
        {props.Link2 && props.Button2 && (
          <Link href={props.Link2}>
            <Button colorScheme="teal" variant="outline">
              {props.Button2}
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
