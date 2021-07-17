import React from "react";
import { Text } from "@chakra-ui/react";

export const Welcome = ({text}) => {
  return (
    <Text
      textAlign='center'
      as='h1'
      fontSize={['30px', '35px', '50px']}
      mt='2rem'
    >
      {text}
    </Text>
  )
}
