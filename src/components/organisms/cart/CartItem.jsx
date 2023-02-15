import { CloseButton, Flex, IconButton, Link, Select, useColorModeValue } from '@chakra-ui/react';
import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';
import {MdDeleteForever} from 'react-icons/md';
import { useContext } from 'react';
import CartContext from '../../../context/cart/cartContext';
import HookUsage from './cartSpinner';

export const CartItem = (props) => {
  const {
    isGiftWrapping,
    name,
    description,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props;
  const { removeFromCart } = useContext(CartContext);

  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        image={imageUrl}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <HookUsage />

        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        /> */}
        <PriceTag price={price} currency={currency} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={() => removeFromCart(props)} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <IconButton
          variant='outline'
          color='red' colorScheme='blue'
          aria-label='Delete'
          icon={<MdDeleteForever />}
          onClick={() => removeFromCart(props)}
        />

        <HookUsage />
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        /> */}
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}
