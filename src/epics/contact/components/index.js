import React, {useEffect} from 'react';
import {
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    Box,
    Container,
    SimpleGrid,
  } from '@chakra-ui/react';
import InfoContact from './infContact';
import ContactForm from '../../categories/pages/ContactForm';

const Contact = () => {

    return ( 

      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: useBreakpointValue({ base: '20%', md: '30%' }),
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: ' #9AC9FB',
                    zIndex: -1,
                  }}>
                  Contact Pages
                </Text>
                <br />{' '}
                <Text color={' #9AC9FB'} as={'span'}>
                  ONG
                </Text>{' '}
              </Heading>
            </Stack>
          </Flex>
        </Stack>

        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <InfoContact/>
            <Flex>
              <ContactForm />
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>
    
    );
}
 
export default Contact;