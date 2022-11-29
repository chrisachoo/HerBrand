import {
  InputGroup,
  InputLeftElement,
  Input,
  FormControl
  
} from '@emotion/react'

const InputIcon = ({}) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        children={<PhoneIcon color='gray.300' />}
      />
      <Input type='tel' placeholder='Phone number' />
    </InputGroup>
  );
}

export default InputIcon;