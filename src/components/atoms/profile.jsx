import { IconButton } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md';

const Profile = ({ innerRef }) => {
  return (
    <IconButton
      ref={innerRef}
      icon={<MdShoppingCart />}
      as={ReachLink}
      variant={'link'}
      cursor='pointer'
      aria-label='Cart'
      color='teal'
      to='/cart'
    />
  )
}
export default Profile;