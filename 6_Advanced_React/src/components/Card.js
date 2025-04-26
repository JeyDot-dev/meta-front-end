import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack borderRadius="xl" id="apiti" bg="white" color="black">
      <Image borderRadius="md" src={imageSrc} />
      <VStack px="3" py="4" alignItems="left">
        <Heading as="h1" size="sm">
          {title}
        </Heading>
        <Text size="lg">{description}</Text>
        <a href="#" style={{ fontWeight: "600" }}>
          See more <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;
