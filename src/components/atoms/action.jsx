import {
  Button,
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
      <Avatar>
        <AvatarBadge boxSize='1.25em' bg='green.500' />
      </Avatar>
      <Avatar>
        <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
      </Avatar>
    </Stack>
  )
}

const Action = () => {
  const { user } = useAuthContext();
  const { cartItems } = useContext(CartContext);

  return (
    <Stack direction='row' spacing={2}>
      <IconButton
        icon={<MdShoppingCart />}
        as={ReachLink}
        variant={'link'}
        cursor='pointer'
        aria-label='Cart'
        color='teal'
        to='/cart'
      />

      <Menu isLazy closeOnSelect={true}>
        <MenuButton as={IconButton} icon={<FaUser />} color='blue.500' />
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