import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { IoBagCheckOutline } from 'react-icons/io5';
import { formatPrice } from './PriceTag';
import { useContext } from 'react';
import CartContext from '../../../context/cart/cartContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { checkout } from '../../hooks/useCheckout'

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;

  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}

export const CartOrderSummary = () => {
  const {
    itemCount,
    handleCheckout,
    clearCart,
    total
  } = useContext(CartContext);
  const { user } = useAuthContext();
  const { checkUser } = checkout();

  const handlePass = async () => {
    await checkUser()
  }


  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(total)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(total)}
          </Text>
        </Flex>
      </Stack>

      {/* <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
        Checkout
      </Button> */}

      <Stack direction='row' spacing={4}>
        <Button leftIcon={<IoBagCheckOutline />}
          colorScheme='blue' variant='solid'
          width='full' cursor='pointer'
          onClick={handlePass}
        >
          Checkout
        </Button>
        <Button rightIcon={<AiFillDelete />}
          color='red' colorScheme='red'
          variant='outline' width='full'
          cursor='pointer' onClick={clearCart}
        >
          Clear
        </Button>
      </Stack>
    </Stack>
  )
}
