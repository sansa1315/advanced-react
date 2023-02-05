import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack backgroundColor={"white"} borderRadius="15px">
      <Image src={imageSrc} borderRadius="15px"></Image>
      <VStack padding={"10px"} alignItems="left">
        <Heading  size={"large"} color={"black"}>{title}</Heading>
        <Text color={"gray"}>{description}</Text>
        <Text color={"black"} fontSize="xs" fontWeight="bold">See more <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" /></Text>
      </VStack>
    </VStack>
  );
};

export default Card;
