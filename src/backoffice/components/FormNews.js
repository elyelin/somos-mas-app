import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  Box,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export default function FormNews() {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="teal.400">Create</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl mt={2}>
                <FormLabel>Title</FormLabel>
                <Input type="title" placeholder="title" id="title" />
              </FormControl>

              <FormControl mt={2}>
                <FormLabel>Contents</FormLabel>
                <Input type="content" placeholder="lorem" id="content" />
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Create
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
