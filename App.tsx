import {StatusBar, useTheme} from 'native-base';
import React from 'react';
import Login from './src/screens/Auth/Login';

export default function App() {
  const {colors} = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={colors.primary[900]}
        barStyle="light-content"
      />
      <Login />
    </>
    // <Center>
    //   <Box safeAreaTop bg="violet.600" />
    //   <HStack
    //     bg="violet.800"
    //     px="1"
    //     py="3"
    //     justifyContent="space-between"
    //     alignItems="center"
    //     w="100%"
    //     maxW={width}>
    //     <HStack alignItems="center">
    //       <IconButton
    //         mr="2"
    //         _pressed={{bg: undefined}}
    //         android_ripple={{borderless: true}}
    //         icon={
    //           <Icon as={MaterialIcons} size="md" name="menu" color="white" />
    //         }
    //       />
    //       <Text color="white" fontSize="18" fontWeight="bold">
    //         Home
    //       </Text>
    //     </HStack>
    //     <HStack>
    //       <IconButton
    //         _pressed={{bg: undefined}}
    //         android_ripple={{borderless: true}}
    //         rounded="full"
    //         icon={
    //           <Icon
    //             as={MaterialIcons}
    //             name="favorite"
    //             size="md"
    //             color="white"
    //           />
    //         }
    //       />
    //       <IconButton
    //         _pressed={{bg: undefined}}
    //         android_ripple={{borderless: true}}
    //         icon={
    //           <Icon as={MaterialIcons} name="search" size="md" color="white" />
    //         }
    //       />
    //       <IconButton
    //         _pressed={{bg: undefined}}
    //         android_ripple={{borderless: true}}
    //         icon={
    //           <Icon
    //             as={MaterialIcons}
    //             name="more-vert"
    //             size="md"
    //             color="white"
    //           />
    //         }
    //       />
    //     </HStack>
    //   </HStack>
    // </Center>
  );
}
