import React from 'react';
import {Heading,
    Stack,
    Text,
    Box,
    Center,
    Image,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin} from 'react-icons/si';

const IMAGE =
  'https://cdn.discordapp.com/attachments/854123246759968773/858030522151731220/unknown_2.png';

const InfoContact = () => {
    return ( 
        <Stack spacing={4}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'} >
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              ONG
            </Text>

          </Stack>

          <Box px={6} py={10}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                src={IMAGE}
              />
            </Box>
            <Stack pt={6} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} p={3}
                px={4}>
                Nombre aca
              </Heading>

            </Stack>
            <Button
              w={'full'}
              colorScheme={'facebook'}
              leftIcon={<FaFacebook />}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}

            >
              <Center>
                <Text>  Facebook aca</Text>
              </Center>
            </Button>

            <Button
              mt={5}
              w={'full'}
              colorScheme={'messenger'}
              leftIcon={<SiLinkedin />}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
              Linkedin aca
            </Button>
          </Box>
        </Box>
      </Stack>
     );
}
 
export default InfoContact;