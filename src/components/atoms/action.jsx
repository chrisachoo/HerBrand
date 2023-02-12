import {
  Stack,
  IconButton,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { MdShoppingCart } from 'react-icons/md'
import { FaHeart, FaChevronDown, FaUser } from 'react-icons/fa'
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
        to='/cart' />

      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme='blue'>
          Profile
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
            <MenuItemOption value='asc'>Ascending</MenuItemOption>
            <MenuItemOption value='desc'>Descending</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title='Country' type='checkbox'>
            <MenuItemOption value='email'>Email</MenuItemOption>
            <MenuItemOption value='phone'>Phone</MenuItemOption>
            <MenuItemOption value='country'>Country</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Stack>
  );
}

export default Action;