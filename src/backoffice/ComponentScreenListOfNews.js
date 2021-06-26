import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"

import ComponentNewsBox from './ComponentNewsBox'

const ComponentScreenListOfNews = () => {
    return (
        <div>
            <Container maxW="container.xl" marginTop="1.5%">
                <Center>
                    <Link to='/backoffice/news/create'>
                        <Button colorScheme="blue">Crear Novedad</Button>
                    </Link>
                </Center>
                <Center marginTop="1%">
                    <h1>Ultimas novedades</h1>
                </Center>
                <Center d="flex" flexDirection="column" marginTop="2%">
                    <ComponentNewsBox />
                    <ComponentNewsBox />
                    <ComponentNewsBox />
                </Center>
            </Container>
        </div>
    )
}

export default ComponentScreenListOfNews