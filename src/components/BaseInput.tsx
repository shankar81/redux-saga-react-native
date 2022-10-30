import {
  Box,
  FormControl,
  IInputProps,
  Input,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

const AnimatedText = Animated.createAnimatedComponent(Text);

interface BaseInputProps extends IInputProps {
  label: string;
  error?: string;
  helper?: {label: string; onPress: () => void};
}

const ANIMATED_CONFIG: WithTimingConfig = {
  duration: 150,
};

export default function BaseInput({
  label,
  error,
  helper,
  ...props
}: BaseInputProps) {
  const translateY = useSharedValue(27);
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setFocused] = useState(false);

  function onFocused() {
    setFocused(true);
  }

  function onBlurred() {
    setFocused(false);
  }

  useEffect(() => {
    if (isFocused) {
      translateY.value = withTiming(0, ANIMATED_CONFIG);
    } else if (props.value?.trim().length === 0) {
      translateY.value = withTiming(27, ANIMATED_CONFIG);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, props.value]);

  const labelAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  return (
    <FormControl
      position="relative"
      isInvalid={error !== undefined}
      marginBottom="10">
      <AnimatedText
        _dark={{
          color: error !== undefined ? 'error.400' : 'text.400',
        }}
        color={error !== undefined ? 'error.500' : 'text.400'}
        fontWeight="bold"
        style={[labelAnimatedStyles]}>
        {label}
      </AnimatedText>

      <Input
        onFocus={onFocused}
        onBlur={onBlurred}
        paddingTop="1"
        ref={inputRef}
        {...props}
      />
      {error !== undefined && (
        <FormControl.ErrorMessage
          _text={{_dark: {color: 'error.400'}}}
          leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      )}
      {helper && (
        <Box
          position="absolute"
          top={error !== undefined ? '60' : 'full'}
          flexDirection="row"
          right="0"
          justifyContent="flex-end"
          marginTop="2">
          <TouchableOpacity onPress={helper.onPress}>
            <Text
              color="primary.900"
              borderBottomColor="primary.900"
              borderBottomWidth="1">
              {helper.label}
            </Text>
          </TouchableOpacity>
        </Box>
      )}
    </FormControl>
  );
}
