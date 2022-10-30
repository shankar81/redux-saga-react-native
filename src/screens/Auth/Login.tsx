import {Box, Center, Icon, IconButton, Image, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {onLogin} from '../../redux/slices/auth.slice';

interface LoginError {
  email?: string;
  password?: string;
}

const {width, height} = Dimensions.get('screen');

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<LoginError>({});

  function togglePasswordVisibility() {
    setPasswordVisible(prevValue => !prevValue);
  }

  function validateInputs() {
    const tempErrors: LoginError = {};

    if (email.trim().length === 0) {
      tempErrors.email = 'Email Id cannot be required!';
    }

    if (password.trim().length === 0) {
      tempErrors.password = 'Password cannot be empty!';
    }

    setErrors({...tempErrors});
    return Object.keys(tempErrors).length === 0;
  }

  function onSubmit() {
    const valid = validateInputs();

    if (valid) {
      // Push the values to the API
      dispatch(onLogin({email, password}));
    }
  }

  return (
    <VStack flex="1" paddingX="6" _dark={{bg: 'dark.100'}}>
      <Center marginY="10">
        <Image
          height={height * 0.05}
          alt="Logo"
          width={width * 0.5}
          source={require('../../assets/images/logo.png')}
        />
        <Text
          color="primary.900"
          lineHeight="lg"
          fontFamily="heading"
          fontSize="sm"
          letterSpacing="lg">
          India's #1 Crowdfunding Platform
        </Text>
      </Center>

      <VStack position="relative">
        <BaseInput
          variant="underlined"
          keyboardType="email-address"
          placeholder=""
          paddingBottom="1"
          fontSize="sm"
          onChangeText={setEmail}
          value={email}
          label="Email Id*"
          helper={{label: 'Get OTP', onPress: () => {}}}
          error={errors.email}
        />
        <BaseInput
          onChangeText={setPassword}
          value={password}
          variant="underlined"
          keyboardType="default"
          placeholder=""
          paddingBottom="1"
          fontSize="sm"
          secureTextEntry={!isPasswordVisible}
          label="Password*"
          helper={{label: 'Forgot Password?', onPress: () => {}}}
          InputRightElement={
            <Box rounded="full" overflow="hidden">
              <IconButton
                android_ripple={{color: 'rgba(0, 0, 0, 0.2)', borderless: true}}
                onPress={togglePasswordVisibility}
                icon={
                  <Icon
                    size="md"
                    color="text.400"
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    as={MaterialCommunityIcons}
                  />
                }
              />
            </Box>
          }
          error={errors.password}
        />

        <BaseButton
          pressable={{onPress: onSubmit}}
          box={{marginTop: '20'}}
          title="Login"
        />
      </VStack>
    </VStack>
  );
}
