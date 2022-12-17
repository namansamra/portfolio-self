import { Button } from '@chakra-ui/react';
import React from 'react';

interface Props {
  text: string;
  styleString?: string;
}
function LightedButton({ text, styleString, ...props }: Props) {
  return (
    <Button
      _hover={{}}
      _active={{}}
      className={`cursor-pointer border-[1px] border-cyan text-cyan hover:text-background px-4 py-2 rounded-sm w-[200px] text-center font-normal hover:shadow-[inset_200px_0px_5px_0px_#08FDD8] duration-200 active:translate-y-1 ${styleString}`}
      {...props}
    >
      {text}
    </Button>
  );
}

export default LightedButton;
