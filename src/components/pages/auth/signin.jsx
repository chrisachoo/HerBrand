import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import { FaUnlockAlt } from 'react-icons/fa';
import { Link as ReachLink } from 'react-router-dom'

const Signin = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'3xl'} fontWeight={'bold'}>Welcome Back...</Heading>

          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<MdEmail color='red.500' />}
              />
              <Input type='email' placeholder='example@email.com' />
            </InputGroup>

          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
              <InputLeftElement
                pointerEvents='none'
                children={<FaUnlockAlt color='red.500' />}
              />
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Stack spacing={5}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              Sign in
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
              Don't have an account yet?
              <Link ml={2} fontWeight='semibold' color='red.500'
              as={ReachLink} to='/signup'
              >
                Sign Up
              </Link>
            </Text>

          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}
export default Signin