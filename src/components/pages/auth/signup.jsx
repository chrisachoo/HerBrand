import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  HStack,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { Link as ReachLink } from 'react-router-dom'

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image
          alt={'Signup Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1558234200-3efd43232f08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1794&q=80'
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'3xl'} fontWeight={'bold'}>Create Account.</Heading>

          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<FaUser color='gray.300' />}
                  />
                  <Input type='text' placeholder='First Name' />
                </InputGroup>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<FaUser color='gray.300' />}
                  />
                  <Input type='text' placeholder='Last Name' />
                </InputGroup>
              </FormControl>
            </Box>
          </HStack>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdEmail color='gray.300' />}
              />
              <Input type='email' placeholder='Email' />
            </InputGroup>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
              <InputLeftElement
                pointerEvents='none'
                children={<FaLock color='red.500' />}
              />
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter Password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Stack spacing={5}>

            <Button colorScheme={'blue'} variant={'solid'}>
              Sign Up
            </Button>

            <Button
              w={'full'}
              maxW={'md'}
              variant={'outline'}
              leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>

            <Text textAlign='center' pt={5}>
              Already have an account yet?
              <Link ml={2} fontWeight='semibold' color='red.500'
                as={ReachLink} to='/signin'
              >
                Sign In
              </Link>
            </Text>

          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
export default Signup