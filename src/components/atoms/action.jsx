import {
  Avatar,
  AvatarBadge,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  MenuItem,
  Stack,
} from '@chakra-ui/react';
import {
  FaHeart,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt
} from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import { Link as ReachLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import CartContext from '../../context/cart/cartContext';
import { useContext } from 'react';

const AvatarButton = ({ user }) => {
  return (
    <Stack direction='row' spacing={4}>
      {user ? (
        <Avatar size='sm'>
          <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
      ) : (
        <Avatar size='sm'>
          <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
        </Avatar>
      )}
    </Stack>
  )
}

const Action = () => {
  const { user } = useAuthContext();
  const { cartItems } = useContext(CartContext);

  return (
    <Stack direction='row' spacing={3} alignItems='center'>
      <Avatar icon={<MdShoppingCart />} as={ReachLink} background='blue.500'
        variant={'link'} to='/cart' size='sm'
      >
        {cartItems.length > 0 && (
          <AvatarBadge boxSize='1.25em' bg='blue.500'>{cartItems.length}</AvatarBadge>
        )}
      </Avatar>

      <Menu isLazy closeOnSelect={true}>
        <MenuButton>
          <AvatarButton user={user} />
        </MenuButton>
        {user ?
          <MenuList minWidth='170px'>
            <MenuItem icon={<BiDetail />}>
              Profile
            </MenuItem>
            <MenuItem icon={<FaHeart color='red.400' />}>
              Likes
            </MenuItem>
            <MenuDivider />
            <MenuItem icon={<FaSignOutAlt color='red.400' />}>
              Logout
            </MenuItem>
          </MenuList> : <MenuList minWidth='170px'>
            <MenuItem icon={<FaHeart />}>
              Likes
            </MenuItem>
            <MenuItem icon={<FaSignInAlt />} as={ReachLink} to='/signin'>
              Sign In
            </MenuItem>
          </MenuList>
        }
      </Menu>
    </Stack>
  );
}

export default Action;