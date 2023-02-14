import { 
  Button,
  HStack,
  Input,
  useNumberInput 
} from '@chakra-ui/react';

const HookUsage = ({props}) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 8,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW='320px'>
      <Button {...dec}>-</Button>
      <Input {...input} width='60px'/>
      <Button {...inc}>+</Button>
    </HStack>
  )
}

export default HookUsage;