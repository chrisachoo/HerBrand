import {
  Stack,
  IconButton
} from '@chakra-ui/react'
import { MdShoppingCart } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { Link as ReachLink } from 'react-router-dom'

const Action = () => {
  return (
    <Stack direction='row' spacing={2}>
      <IconButton 
        icon={<MdShoppingCart />}
        as={ReachLink}
        variant={'link'}
        cursor='pointer'
        aria-label='Cart'
        color='teal'
        to='/cart'/>
      <IconButton 
        icon={<FaHeart />}
        as={ReachLink}
        variant={'link'}
        cursor='pointer'
        aria-label='Lists'
        color='red'
        to='/lists'
      />
    </Stack>
  );
}

export default Action;