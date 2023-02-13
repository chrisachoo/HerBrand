import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { CartItem } from './CartItem';
import { CartOrderSummary } from './CartOrderSummary';
import { Link as ReachLink } from 'react-router-dom';
import CartContext from '../../../context/cart/cartContext';
import { useContext } from 'react';

const Cart = () => {
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  return (
    <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cartItems.length} items)
          </Heading>

          {cartItems.length === 0 ? (
            <Heading as='h4' size='md'
              alignItems='center' justifyContent='center'
            >
              Cart is empty
            </Heading>) : (
            <Stack spacing="6">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          )}
        </Stack>

        <Flex direction="column" align="center" flex="1">
          {cartItems.length === 0 ? (null) : (<CartOrderSummary />)}
          <HStack mt="6" fontWeight="semibold">
            <Link color={mode('blue.500', 'blue.200')} as={ReachLink} to='/shop' >
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}

export default Cart;