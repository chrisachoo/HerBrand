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
import { FaHeart, 
  FaUser, 
  FaSignOutAlt, 
  FaSignInAlt 
} from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { BiDetail } from 'react-icons/bi';
import { Link as ReachLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


const Action = () => {
  const { user } = useAuthContext();

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

      <Menu closeOnSelect={true}>
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
            <MenuItem icon={<FaSignInAlt />}>
              Sign In
            </MenuItem>
          </MenuList>
        }
      </Menu>
    </Stack>
  );
}

export default Action;