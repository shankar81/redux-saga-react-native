import {
  Box,
  Center,
  IBoxProps,
  IPressableProps,
  ITextProps,
  Pressable,
  Text,
} from 'native-base';
import React from 'react';

interface BaseButtonProps {
  pressable?: IPressableProps;
  box?: IBoxProps;
  text?: ITextProps;
  title: string;
}

export default function BaseButton({
  box,
  pressable,
  text,
  title,
}: BaseButtonProps) {
  return (
    <Box overflow="hidden" rounded="lg" shadow="8" {...box}>
      <Pressable
        android_ripple={{color: ''}}
        p="2"
        bg="primary.900"
        {...pressable}>
        <Center>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="md"
            color="text.100"
            {...text}>
            {title}
          </Text>
        </Center>
      </Pressable>
    </Box>
  );
}
